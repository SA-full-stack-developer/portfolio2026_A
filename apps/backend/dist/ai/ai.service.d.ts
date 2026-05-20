import { ChatCvDto } from './dto/chat-cv.dto';
import { ConfigService } from '@nestjs/config';
import { AskMeDto } from './dto/ask-me.dto';
import { ContactAssistantDto } from './dto/contact-assistant.dto';
import { CoverLetterDto } from './dto/cover-letter.dto';
export declare class AiService {
    private readonly configService;
    private readonly genAI;
    private readonly model;
    constructor(configService: ConfigService);
    private formatHistory;
    private chat;
    chatWithCv(dto: ChatCvDto): Promise<string>;
    generateCoverLetter(dto: CoverLetterDto): Promise<string>;
    contactAssistant(dto: ContactAssistantDto): Promise<string>;
    askMe(dto: AskMeDto): Promise<string>;
}
