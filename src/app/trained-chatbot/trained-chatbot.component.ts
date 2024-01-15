// src/app/trained-chatbot.component.ts

import { Component } from '@angular/core';
import { ChatService } from '../services/chat.service';



@Component({
  selector: 'app-trained-chatbot',
  templateUrl: './trained-chatbot.component.html',
  styleUrls: ['./trained-chatbot.component.css'],
})
export class TrainedChatbotComponent {
  userMessage = '';
  chatMessages: string[] = [];
  conversation: { content: string; isUser: boolean }[] = [];

  constructor(public chatService: ChatService) {}


  ngOnInit(): void {
    this.chatService.showPopup();

    setTimeout(() => {
      this.hidePopup();
    }, 10000);
  }

  sendMessage() {
    const response = this.chatService.getIntentResponse(this.userMessage);
    // this.chatMessages.push(`User: ${this.userMessage}`);
    this.conversation.push({ content: this.userMessage, isUser: true });
    // this.chatMessages.push(`Bot: ${response}`);
    this.conversation.push({ content: response, isUser: false });

    this.userMessage = '';
  }

  hidePopup() {

    const popupOverlay = document.querySelector('.popup-overlay') as HTMLElement;
    popupOverlay.style.animation = 'fadeOut 0.5s ease-out forwards';

    setTimeout(() => {
      this.chatService.hidePopup();
    }, 500); 
  }

  isChatOpen = false;
  toggleChatWindow() {
    this.isChatOpen = !this.isChatOpen;
  }

  closeChatWindow() {
    this.isChatOpen = false;
  }
}
