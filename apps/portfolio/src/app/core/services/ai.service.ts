import { inject, Service } from '@angular/core';
import {
  AiResponse,
  AskMeRequest,
  ChatCvRequest,
  ContactAssistantRequest,
  CoverLetterRequest,
} from '@portfolio/shared/models';
import { map, Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';

@Service()
export class AiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiUrl}/ai`;

  chatCv(body: ChatCvRequest): Observable<string> {
    return this.http
      .post<{ data: AiResponse }>(`${this.baseUrl}/chat-cv`, body)
      .pipe(map((res) => res.data.response));
  }

  coverLetter(body: CoverLetterRequest): Observable<string> {
    return this.http
      .post<{ data: AiResponse }>(`${this.baseUrl}/cover-letter`, body)
      .pipe(map((res) => res.data.response));
  }

  contactAssistant(body: ContactAssistantRequest): Observable<string> {
    return this.http
      .post<{ data: AiResponse }>(`${this.baseUrl}/contact-assistant`, body)
      .pipe(map((res) => res.data.response));
  }

  askMe(body: AskMeRequest): Observable<string> {
    return this.http
      .post<{ data: AiResponse }>(`${this.baseUrl}/ask-me`, body)
      .pipe(map((res) => res.data.response));
  }
}
