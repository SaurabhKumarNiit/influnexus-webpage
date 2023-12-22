// chatbot.component.ts

import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css'],
  providers: [ChatService],
})
export class ChatbotComponent {
  @ViewChild('chatBody', { static: true }) chatBody: ElementRef | null = null;

  userMessage = '';
  conversation: { content: string; isUser: boolean }[] = [];
  userinfo: any = { keyId: '', apiKey: '' };

  constructor(public chatService: ChatService, private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
    this.chatService.getSpecificKey(1).subscribe({
      next: data => {
        this.userinfo = data;
      },
      error: e => {
        console.log("Api Key Failed");
      }
    });

    this.addClickOutsideListener();
    this.chatService.showPopup();

    setTimeout(() => {
      this.hidePopup();
    }, 10000);
  }

  hidePopup() {

    const popupOverlay = document.querySelector('.popup-overlay') as HTMLElement;
    popupOverlay.style.animation = 'fadeOut 0.5s ease-out forwards';

    setTimeout(() => {
      this.chatService.hidePopup();
    }, 500); 
  }

  sendMessage() {
    if (!this.userMessage.trim()) return;

    // Add user message to the conversation
    this.conversation.push({ content: this.userMessage, isUser: true });

    this.chatService.sendMessage(this.userMessage, this.userinfo.apiKey).subscribe(
      (response) => {
        // Add chatbot response to the conversation
        const botResponse = response.choices[0]?.message?.content || 'No response';
        this.conversation.push({ content: botResponse, isUser: false });
      },
      (error) => {
        console.error('Error:', error);
        this.conversation.push({ content: 'Oops! Something went wrong. Please try again.', isUser: false });
      }
    );

    // Clear the user input
    this.userMessage = '';
    this.scrollToBottom();
  }

  onChatBodyScroll() {
    // Scroll to the bottom when the user is not scrolling manually
    if (this.isScrollAtBottom()) {
      this.scrollToBottom();
    }
  }

  scrollToBottom() {
    // Scroll to the bottom of the chat window with a slight delay
    setTimeout(() => {
      if (this.chatBody) {
        this.chatBody.nativeElement.scrollTop = this.chatBody.nativeElement.scrollHeight;
      }
    }, 100);
  }

  isScrollAtBottom(): boolean {
    // Check if the user is at the bottom of the chat window
    if (this.chatBody) {
      const scrollTop = this.chatBody.nativeElement.scrollTop;
      const scrollHeight = this.chatBody.nativeElement.scrollHeight;
      const clientHeight = this.chatBody.nativeElement.clientHeight;

      // Allow a small tolerance (5 pixels) for detecting if the user is at the bottom
      return scrollHeight - scrollTop < clientHeight + 5;
    }

    return false;
  }

  isChatOpen = false;

  toggleChatWindow() {
    this.isChatOpen = !this.isChatOpen;
  }

  closeChatWindow() {
    this.isChatOpen = false;
  }

  addClickOutsideListener() {
    this.renderer.listen('document', 'click', (event: Event) => {
      const clickedElement = event.target as HTMLElement;
      const isClickInside = this.el.nativeElement.contains(clickedElement);

      if (!isClickInside) {
        this.closeChatWindow();
      }
    });
  }

}
