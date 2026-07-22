import { Component, input, ChangeDetectionStrategy } from '@angular/core';

import { MessageDto } from '@portfolio/shared/models';

@Component({
  selector: 'app-chat-message',
  standalone: true,
  templateUrl: './chat-message.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './chat-message.component.scss',
})
export class ChatMessageComponent {
  message = input.required<MessageDto>();
}
