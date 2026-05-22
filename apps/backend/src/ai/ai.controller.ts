import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';

import { AiService } from './ai.service';
import { AskMeDto } from './dto/ask-me.dto';
import { ChatCvDto } from './dto/chat-cv.dto';
import { ContactAssistantDto } from './dto/contact-assistant.dto';
import { CoverLetterDto } from './dto/cover-letter.dto';

@Controller('ai')
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @Post('chat-cv')
  @HttpCode(HttpStatus.OK)
  async chatWithCv(@Body() dto: ChatCvDto): Promise<{ response: string }> {
    const response = await this.aiService.chatWithCv(dto);
    return { response };
  }

  @Post('cover-letter')
  @HttpCode(HttpStatus.OK)
  async generateCoverLetter(
    @Body() dto: CoverLetterDto,
  ): Promise<{ response: string }> {
    const response = await this.aiService.generateCoverLetter(dto);
    return { response };
  }

  @Post('contact-assistant')
  @HttpCode(HttpStatus.OK)
  async contactAssistant(
    @Body() dto: ContactAssistantDto,
  ): Promise<{ response: string }> {
    const response = await this.aiService.contactAssistant(dto);
    return { response };
  }

  @Post('ask-me')
  @HttpCode(HttpStatus.OK)
  async askMe(@Body() dto: AskMeDto): Promise<{ response: string }> {
    const response = await this.aiService.askMe(dto);
    return { response };
  }
}
