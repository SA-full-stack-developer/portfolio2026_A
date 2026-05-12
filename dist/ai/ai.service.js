"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AiService = void 0;
const common_1 = require("@nestjs/common");
const ai_prompts_const_1 = require("./constants/ai-prompts.const");
const generative_ai_1 = require("@google/generative-ai");
const config_1 = require("@nestjs/config");
let AiService = class AiService {
    configService;
    genAI;
    model;
    constructor(configService) {
        this.configService = configService;
        const apiKey = this.configService.get('GEMINI_API_KEY');
        if (!apiKey) {
            throw new Error('GEMINI_API_KEY is not defined in environment variables');
        }
        this.model =
            this.configService.get('GEMINI_MODEL') ?? 'gemini-2.5-flash';
        this.genAI = new generative_ai_1.GoogleGenerativeAI(apiKey);
    }
    formatHistory(history = []) {
        return history.map((msg) => ({
            role: msg.role,
            parts: [{ text: msg.content }],
        }));
    }
    async chat(systemPrompt, message, history = []) {
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
        }
        catch (error) {
            console.error('Gemini error:', error);
            throw new common_1.InternalServerErrorException('Error communicating with Gemini API');
        }
    }
    async chatWithCv(dto) {
        return this.chat(ai_prompts_const_1.CHAT_CV_PROMPT, dto.message, dto.history);
    }
    async generateCoverLetter(dto) {
        try {
            const geminiModel = this.genAI.getGenerativeModel({
                model: this.model,
                systemInstruction: ai_prompts_const_1.COVER_LETTER_PROMPT,
            });
            const prompt = `
        Company: ${dto.company}
        Role: ${dto.role}
        ${dto.jobDescription ? `Job description: ${dto.jobDescription}` : ''}
        
        Generate the cover letter now.
      `;
            const result = await geminiModel.generateContent(prompt);
            return result.response.text();
        }
        catch (error) {
            console.error('Gemini error:', error);
            throw new common_1.InternalServerErrorException('Error communicating with Gemini API');
        }
    }
    async contactAssistant(dto) {
        return this.chat(ai_prompts_const_1.CONTACT_ASSISTANT_PROMPT, dto.message, dto.history);
    }
    async askMe(dto) {
        return this.chat(ai_prompts_const_1.ASK_ME_PROMPT, dto.message, dto.history);
    }
};
exports.AiService = AiService;
exports.AiService = AiService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], AiService);
//# sourceMappingURL=ai.service.js.map