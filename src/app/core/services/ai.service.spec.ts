import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { TestBed } from '@angular/core/testing';
import { environment } from '@env/environment';
import { AiService } from './ai.service';

describe('AiService', () => {
  let service: AiService;
  let httpMock: HttpTestingController;
  const baseUrl = `${environment.apiUrl}/ai`;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AiService],
    });

    service = TestBed.inject(AiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('chatCv', () => {
    it('should post chat-cv request and return response text', () => {
      const body = { message: 'hello', history: [] };
      const response = { data: { response: 'chat response' } };

      service.chatCv(body).subscribe((result) => {
        expect(result).toBe('chat response');
      });

      const req = httpMock.expectOne(`${baseUrl}/chat-cv`);
      expect(req.request.method).toBe('POST');
      expect(req.request.body).toEqual(body);
      req.flush(response);
    });

    it('should pass body without history when history is undefined', () => {
      const body = { message: 'hello' };
      const response = { data: { response: 'chat response' } };

      service.chatCv(body).subscribe((result) => {
        expect(result).toBe('chat response');
      });

      const req = httpMock.expectOne(`${baseUrl}/chat-cv`);
      expect(req.request.body).toEqual(body);
      req.flush(response);
    });

    it('should emit error when the backend returns an error', () => {
      const body = { message: 'hello' };
      let errorResponse: any;

      service.chatCv(body).subscribe({
        next: () => {
          throw new Error('Expected an error');
        },
        error: (error) => {
          errorResponse = error;
        },
      });

      const req = httpMock.expectOne(`${baseUrl}/chat-cv`);
      req.flush({ message: 'server error' }, { status: 500, statusText: 'Server Error' });

      expect(errorResponse.status).toBe(500);
    });
  });

  describe('coverLetter', () => {
    it('should post cover-letter request with jobDescription', () => {
      const body = {
        company: 'TestCorp',
        role: 'Developer',
        jobDescription: 'Build user interfaces',
      };
      const response = { data: { response: 'cover response' } };

      service.coverLetter(body).subscribe((result) => {
        expect(result).toBe('cover response');
      });

      const req = httpMock.expectOne(`${baseUrl}/cover-letter`);
      expect(req.request.method).toBe('POST');
      expect(req.request.body).toEqual(body);
      req.flush(response);
    });

    it('should omit jobDescription when it is undefined', () => {
      const body = {
        company: 'TestCorp',
        role: 'Developer',
        jobDescription: undefined,
      } as any;
      const response = { data: { response: 'cover response' } };

      service.coverLetter(body).subscribe((result) => {
        expect(result).toBe('cover response');
      });

      const req = httpMock.expectOne(`${baseUrl}/cover-letter`);
      expect(req.request.body).toEqual({ company: 'TestCorp', role: 'Developer' });
      req.flush(response);
    });
  });

  describe('contactAssistant', () => {
    it('should post contact-assistant request and return response text', () => {
      const body = { message: 'help', history: [] };
      const response = { data: { response: 'assistant response' } };

      service.contactAssistant(body).subscribe((result) => {
        expect(result).toBe('assistant response');
      });

      const req = httpMock.expectOne(`${baseUrl}/contact-assistant`);
      expect(req.request.method).toBe('POST');
      expect(req.request.body).toEqual(body);
      req.flush(response);
    });

    it('should handle undefined history gracefully', () => {
      const body = { message: 'help' };
      const response = { data: { response: 'assistant response' } };

      service.contactAssistant(body).subscribe((result) => {
        expect(result).toBe('assistant response');
      });

      const req = httpMock.expectOne(`${baseUrl}/contact-assistant`);
      expect(req.request.body).toEqual(body);
      req.flush(response);
    });
  });

  describe('askMe', () => {
    it('should post ask-me request and return response text', () => {
      const body = { message: 'question', history: [] };
      const response = { data: { response: 'ask-me response' } };

      service.askMe(body).subscribe((result) => {
        expect(result).toBe('ask-me response');
      });

      const req = httpMock.expectOne(`${baseUrl}/ask-me`);
      expect(req.request.method).toBe('POST');
      expect(req.request.body).toEqual(body);
      req.flush(response);
    });

    it('should handle empty history arrays', () => {
      const body = { message: 'question', history: [] };
      const response = { data: { response: 'ask-me response' } };

      service.askMe(body).subscribe((result) => {
        expect(result).toBe('ask-me response');
      });

      const req = httpMock.expectOne(`${baseUrl}/ask-me`);
      expect(req.request.body).toEqual(body);
      req.flush(response);
    });
  });
});
