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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AiController = void 0;
const common_1 = require("@nestjs/common");
const ai_service_1 = require("./ai.service");
const ask_me_dto_1 = require("./dto/ask-me.dto");
const chat_cv_dto_1 = require("./dto/chat-cv.dto");
const contact_assistant_dto_1 = require("./dto/contact-assistant.dto");
const cover_letter_dto_1 = require("./dto/cover-letter.dto");
let AiController = class AiController {
    aiService;
    constructor(aiService) {
        this.aiService = aiService;
    }
    async chatWithCv(dto) {
        const response = await this.aiService.chatWithCv(dto);
        return { response };
    }
    async generateCoverLetter(dto) {
        const response = await this.aiService.generateCoverLetter(dto);
        return { response };
    }
    async contactAssistant(dto) {
        const response = await this.aiService.contactAssistant(dto);
        return { response };
    }
    async askMe(dto) {
        const response = await this.aiService.askMe(dto);
        return { response };
    }
};
exports.AiController = AiController;
__decorate([
    (0, common_1.Post)('chat-cv'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [chat_cv_dto_1.ChatCvDto]),
    __metadata("design:returntype", Promise)
], AiController.prototype, "chatWithCv", null);
__decorate([
    (0, common_1.Post)('cover-letter'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cover_letter_dto_1.CoverLetterDto]),
    __metadata("design:returntype", Promise)
], AiController.prototype, "generateCoverLetter", null);
__decorate([
    (0, common_1.Post)('contact-assistant'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [contact_assistant_dto_1.ContactAssistantDto]),
    __metadata("design:returntype", Promise)
], AiController.prototype, "contactAssistant", null);
__decorate([
    (0, common_1.Post)('ask-me'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ask_me_dto_1.AskMeDto]),
    __metadata("design:returntype", Promise)
], AiController.prototype, "askMe", null);
exports.AiController = AiController = __decorate([
    (0, common_1.Controller)('ai'),
    __metadata("design:paramtypes", [ai_service_1.AiService])
], AiController);
//# sourceMappingURL=ai.controller.js.map