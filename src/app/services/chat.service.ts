import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private apiUrl = 'https://api.openai.com/v1/chat/completions';
  private apiKey = 'API_KEY';

  constructor(private http: HttpClient) {}

  sendMessage(message: string): Observable<any> {
    const requestOptions = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.apiKey}`,
      },
    };

    const requestBody = {
      model: 'gpt-3.5-turbo',
      temperature: 0.5,
      max_tokens: 100,
      messages: [{ role: 'user', content: message }],
    };

    return this.http.post(this.apiUrl, requestBody, requestOptions);
  }
}
