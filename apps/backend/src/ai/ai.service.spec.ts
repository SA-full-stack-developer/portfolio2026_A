import { Test, TestingModule } from '@nestjs/testing';

import { ConfigService } from '@nestjs/config';
import { AiService } from './ai.service';
import { AskMeDto } from './dto/ask-me.dto';
import { ChatCvDto } from './dto/chat-cv.dto';
import { ContactAssistantDto } from './dto/contact-assistant.dto';
import { CoverLetterDto } from './dto/cover-letter.dto';

const mockSendMessage = jest.fn();
const mockGenerateContent = jest.fn();
const mockGetGenerativeModel = jest.fn();

const mockGoogleGenerativeAI = {
  getGenerativeModel: mockGetGenerativeModel,
};

jest.mock('@google/generative-ai', () => ({
  GoogleGenerativeAI: jest
    .fn()
    .mockImplementation(() => mockGoogleGenerativeAI),
}));

describe('AiService', () => {
  let service: AiService;
  const mockConfigService = { get: jest.fn() };

  beforeEach(async () => {
    mockConfigService.get.mockImplementation((key: string) => {
      if (key === 'GEMINI_API_KEY') return 'test-api-key';
      if (key === 'GEMINI_MODEL') return 'test-model';
      return undefined;
    });

    mockSendMessage.mockReset();
    mockGenerateContent.mockReset();
    mockGetGenerativeModel.mockReset();

    mockGetGenerativeModel.mockImplementation(() => ({
      startChat: jest.fn().mockReturnValue({ sendMessage: mockSendMessage }),
      generateContent: mockGenerateContent,
    }));

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AiService,
        { provide: ConfigService, useValue: mockConfigService },
      ],
    }).compile();

    service = module.get<AiService>(AiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('chatWithCv', () => {
    it('should call Gemini chat and return the response text', async () => {
      const dto: ChatCvDto = { message: 'hello' };
      mockSendMessage.mockResolvedValueOnce({
        response: { text: () => 'chat-cv response' },
      });

      const result = await service.chatWithCv(dto);

      expect(result).toBe('chat-cv response');
      expect(mockGetGenerativeModel).toHaveBeenCalledWith(
        expect.objectContaining({ model: 'test-model' }),
      );
      expect(mockSendMessage).toHaveBeenCalledWith(dto.message);
    });

    it('should handle empty history arrays', async () => {
      const dto: ChatCvDto = { message: 'hello', history: [] };
      mockSendMessage.mockResolvedValueOnce({
        response: { text: () => 'chat-cv empty history' },
      });

      const result = await service.chatWithCv(dto);

      expect(result).toBe('chat-cv empty history');
      expect(mockSendMessage).toHaveBeenCalledWith(dto.message);
    });
  });

  describe('generateCoverLetter', () => {
    it('should call Gemini generateContent and return the response text', async () => {
      const dto: CoverLetterDto = {
        company: 'TestCorp',
        role: 'Developer',
        jobDescription: 'Build user interfaces',
      };
      mockGenerateContent.mockResolvedValueOnce({
        response: { text: () => 'cover response' },
      });

      const result = await service.generateCoverLetter(dto);

      expect(result).toBe('cover response');
      expect(mockGenerateContent).toHaveBeenCalledWith(
        expect.stringContaining('Company: TestCorp'),
      );
      expect(mockGenerateContent).toHaveBeenCalledWith(
        expect.stringContaining('Role: Developer'),
      );
      expect(mockGenerateContent).toHaveBeenCalledWith(
        expect.stringContaining('Job description: Build user interfaces'),
      );
    });

    it('should handle undefined jobDescription', async () => {
      const dto: CoverLetterDto = {
        company: 'TestCorp',
        role: 'Developer',
        jobDescription: undefined,
      };
      mockGenerateContent.mockResolvedValueOnce({
        response: { text: () => 'cover response undefined' },
      });

      const result = await service.generateCoverLetter(dto);

      expect(result).toBe('cover response undefined');
      expect(mockGenerateContent).toHaveBeenCalledWith(
        expect.stringContaining('Company: TestCorp'),
      );
      expect(mockGenerateContent).toHaveBeenCalledWith(
        expect.stringContaining('Role: Developer'),
      );
      expect(mockGenerateContent.mock.calls[0][0]).not.toContain(
        'Job description:',
      );
    });
  });

  describe('contactAssistant', () => {
    it('should call Gemini chat and return the response text', async () => {
      const dto: ContactAssistantDto = { message: 'help' };
      mockSendMessage.mockResolvedValueOnce({
        response: { text: () => 'assistant response' },
      });

      const result = await service.contactAssistant(dto);

      expect(result).toBe('assistant response');
      expect(mockSendMessage).toHaveBeenCalledWith(dto.message);
    });

    it('should handle empty history arrays', async () => {
      const dto: ContactAssistantDto = { message: 'help', history: [] };
      mockSendMessage.mockResolvedValueOnce({
        response: { text: () => 'assistant response empty' },
      });

      const result = await service.contactAssistant(dto);

      expect(result).toBe('assistant response empty');
      expect(mockSendMessage).toHaveBeenCalledWith(dto.message);
    });
  });

  describe('askMe', () => {
    it('should call Gemini chat and return the response text', async () => {
      const dto: AskMeDto = { message: 'question' };
      mockSendMessage.mockResolvedValueOnce({
        response: { text: () => 'askme response' },
      });

      const result = await service.askMe(dto);

      expect(result).toBe('askme response');
      expect(mockSendMessage).toHaveBeenCalledWith(dto.message);
    });

    it('should handle empty history arrays', async () => {
      const dto: AskMeDto = { message: 'question', history: [] };
      mockSendMessage.mockResolvedValueOnce({
        response: { text: () => 'askme response empty' },
      });

      const result = await service.askMe(dto);

      expect(result).toBe('askme response empty');
      expect(mockSendMessage).toHaveBeenCalledWith(dto.message);
    });
  });
});
