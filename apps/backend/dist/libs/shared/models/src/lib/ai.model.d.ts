export interface MessageDto {
    role: 'user' | 'model';
    content: string;
}
export interface ChatCvRequest {
    message: string;
    history?: MessageDto[];
}
export interface CoverLetterRequest {
    company: string;
    role: string;
    jobDescription?: string;
}
export interface ContactAssistantRequest {
    message: string;
    history?: MessageDto[];
}
export interface AskMeRequest {
    message: string;
    history?: MessageDto[];
}
export interface AiResponse {
    response: string;
}
