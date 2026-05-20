import { Injectable, InternalServerErrorException } from '@nestjs/common';
import {
  ASK_ME_PROMPT,
  CHAT_CV_PROMPT,
  CONTACT_ASSISTANT_PROMPT,
  COVER_LETTER_PROMPT,
} from './constants/ai-prompts.const';
import { ChatCvDto, MessageDto } from './dto/chat-cv.dto';

import { GoogleGenerativeAI } from '@google/generative-ai';
import { ConfigService } from '@nestjs/config';
import { AskMeDto } from './dto/ask-me.dto';
import { ContactAssistantDto } from './dto/contact-assistant.dto';
import { CoverLetterDto } from './dto/cover-letter.dto';

@Injectable()
export class AiService {
  private readonly genAI: GoogleGenerativeAI;
  private readonly model: string;

  constructor(private readonly configService: ConfigService) {
    const apiKey = this.configService.get<string>('GEMINI_API_KEY');

    if (!apiKey) {
      throw new Error('GEMINI_API_KEY is not defined in environment variables');
    }

    this.model =
      this.configService.get<string>('GEMINI_MODEL') ?? 'gemini-2.5-flash';
    this.genAI = new GoogleGenerativeAI(apiKey);
  }

  private formatHistory(history: MessageDto[] = []) {
    return history.map((msg) => ({
      role: msg.role,
      parts: [{ text: msg.content }],
    }));
  }

  private async chat(
    systemPrompt: string,
    message: string,
    history: MessageDto[] = [],
  ): Promise<string> {
    try {
      const geminiModel = this.genAI.getGenerativeModel({
        model: this.model,
        systemInstruction: systemPrompt,
      });

      const chat = geminiModel.startChat({
        history: this.formatHistory(history),
      });

      const result = await chat.sendMessage(message);
      return result.response.text();
    } catch (error) {
      console.error('Gemini error:', error);
      throw new InternalServerErrorException(
        'Error communicating with Gemini API',
      );
    }
  }

  async chatWithCv(dto: ChatCvDto): Promise<string> {
    return this.chat(CHAT_CV_PROMPT, dto.message, dto.history);
  }

  async generateCoverLetter(dto: CoverLetterDto): Promise<string> {
    try {
      const geminiModel = this.genAI.getGenerativeModel({
        model: this.model,
        systemInstruction: COVER_LETTER_PROMPT,
      });

      const prompt = `
        Company: ${dto.company}
        Role: ${dto.role}
        ${dto.jobDescription ? `Job description: ${dto.jobDescription}` : ''}
        
        Generate the cover letter now.
      `;

      const result = await geminiModel.generateContent(prompt);
      return result.response.text();
    } catch (error) {
      console.error('Gemini error:', error);
      throw new InternalServerErrorException(
        'Error communicating with Gemini API',
      );
    }
  }

  async contactAssistant(dto: ContactAssistantDto): Promise<string> {
    return this.chat(CONTACT_ASSISTANT_PROMPT, dto.message, dto.history);
  }

  async askMe(dto: AskMeDto): Promise<string> {
    return this.chat(ASK_ME_PROMPT, dto.message, dto.history);
  }
}
