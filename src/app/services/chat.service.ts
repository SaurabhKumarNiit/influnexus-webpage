import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EditingDataService } from './editing-data.service';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private apiUrl = 'https://api.openai.com/v1/chat/completions';
  private apiKey = '';

  constructor(private http: HttpClient,private service :EditingDataService) {}


  sendMessage(message: string, key:string): Observable<any> {
    const requestOptions = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${key}`,
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

  getSpecificKey(keyId:number): Observable<any> {
    return this.http.get<any>(`${'https://zippy-unit-production.up.railway.app'}/apiKeys/${keyId}`);
  }

  private isPopupVisible = false;

  showPopup() {
    this.isPopupVisible = true;
  }

  hidePopup() {
    this.isPopupVisible = false;
  }

  isPopupVisible1(): boolean {
    return this.isPopupVisible;
  }
}
