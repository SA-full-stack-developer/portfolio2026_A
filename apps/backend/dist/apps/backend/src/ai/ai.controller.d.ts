import { AiService } from './ai.service';
import { AskMeDto } from './dto/ask-me.dto';
import { ChatCvDto } from './dto/chat-cv.dto';
import { ContactAssistantDto } from './dto/contact-assistant.dto';
import { CoverLetterDto } from './dto/cover-letter.dto';
export declare class AiController {
    private readonly aiService;
    constructor(aiService: AiService);
    chatWithCv(dto: ChatCvDto): Promise<{
        response: string;
    }>;
    generateCoverLetter(dto: CoverLetterDto): Promise<{
        response: string;
    }>;
    contactAssistant(dto: ContactAssistantDto): Promise<{
        response: string;
    }>;
    askMe(dto: AskMeDto): Promise<{
        response: string;
    }>;
}
