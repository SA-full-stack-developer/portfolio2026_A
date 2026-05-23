export declare class MessageDto {
    role: 'user' | 'model';
    content: string;
}
export declare class ChatCvDto {
    message: string;
    history?: MessageDto[];
}
