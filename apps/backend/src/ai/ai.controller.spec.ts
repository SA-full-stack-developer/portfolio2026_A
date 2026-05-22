import { Test, TestingModule } from '@nestjs/testing';

import { AiController } from './ai.controller';
import { AiService } from './ai.service';
import { AskMeDto } from './dto/ask-me.dto';
import { ChatCvDto } from './dto/chat-cv.dto';
import { ContactAssistantDto } from './dto/contact-assistant.dto';
import { CoverLetterDto } from './dto/cover-letter.dto';

describe('AiController', () => {
  let controller: AiController;
  let aiService: AiService;

  const mockAiService = {
    chatWithCv: jest.fn(),
    generateCoverLetter: jest.fn(),
    contactAssistant: jest.fn(),
    askMe: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AiController],
      providers: [
        {
          provide: AiService,
          useValue: mockAiService,
        },
      ],
    }).compile();

    controller = module.get<AiController>(AiController);
    aiService = module.get<AiService>(AiService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('chatWithCv', () => {
    it('should return response from aiService.chatWithCv', async () => {
      const dto: ChatCvDto = { message: 'test message' };
      const mockResponse = 'mock response';
      mockAiService.chatWithCv.mockResolvedValue(mockResponse);

      const result = await controller.chatWithCv(dto);

      expect(mockAiService.chatWithCv).toHaveBeenCalledWith(dto);
      expect(result).toEqual({ response: mockResponse });
    });

    it('should handle empty history array in dto', async () => {
      const dto: ChatCvDto = { message: 'test message', history: [] };
      const mockResponse = 'mock response';
      mockAiService.chatWithCv.mockResolvedValue(mockResponse);

      const result = await controller.chatWithCv(dto);

      expect(mockAiService.chatWithCv).toHaveBeenCalledWith(dto);
      expect(result).toEqual({ response: mockResponse });
    });
  });

  describe('generateCoverLetter', () => {
    it('should return response from aiService.generateCoverLetter', async () => {
      const dto: CoverLetterDto = {
        company: 'test company',
        role: 'test role',
      };
      const mockResponse = 'mock response';
      mockAiService.generateCoverLetter.mockResolvedValue(mockResponse);

      const result = await controller.generateCoverLetter(dto);

      expect(mockAiService.generateCoverLetter).toHaveBeenCalledWith(dto);
      expect(result).toEqual({ response: mockResponse });
    });

    it('should handle undefined jobDescription in dto', async () => {
      const dto: CoverLetterDto = {
        company: 'test company',
        role: 'test role',
        jobDescription: undefined,
      };
      const mockResponse = 'mock response';
      mockAiService.generateCoverLetter.mockResolvedValue(mockResponse);

      const result = await controller.generateCoverLetter(dto);

      expect(mockAiService.generateCoverLetter).toHaveBeenCalledWith(dto);
      expect(result).toEqual({ response: mockResponse });
    });
  });

  describe('contactAssistant', () => {
    it('should return response from aiService.contactAssistant', async () => {
      const dto: ContactAssistantDto = { message: 'test message' };
      const mockResponse = 'mock response';
      mockAiService.contactAssistant.mockResolvedValue(mockResponse);

      const result = await controller.contactAssistant(dto);

      expect(mockAiService.contactAssistant).toHaveBeenCalledWith(dto);
      expect(result).toEqual({ response: mockResponse });
    });

    it('should handle undefined history in dto', async () => {
      const dto: ContactAssistantDto = {
        message: 'test message',
        history: undefined,
      };
      const mockResponse = 'mock response';
      mockAiService.contactAssistant.mockResolvedValue(mockResponse);

      const result = await controller.contactAssistant(dto);

      expect(mockAiService.contactAssistant).toHaveBeenCalledWith(dto);
      expect(result).toEqual({ response: mockResponse });
    });
  });

  describe('askMe', () => {
    it('should return response from aiService.askMe', async () => {
      const dto: AskMeDto = { message: 'test message' };
      const mockResponse = 'mock response';
      mockAiService.askMe.mockResolvedValue(mockResponse);

      const result = await controller.askMe(dto);

      expect(mockAiService.askMe).toHaveBeenCalledWith(dto);
      expect(result).toEqual({ response: mockResponse });
    });

    it('should handle empty history array in dto', async () => {
      const dto: AskMeDto = { message: 'test message', history: [] };
      const mockResponse = 'mock response';
      mockAiService.askMe.mockResolvedValue(mockResponse);

      const result = await controller.askMe(dto);

      expect(mockAiService.askMe).toHaveBeenCalledWith(dto);
      expect(result).toEqual({ response: mockResponse });
    });
  });
});
