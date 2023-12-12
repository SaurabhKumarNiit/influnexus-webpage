import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { ChatService } from '../services/chat.service';


@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css'],
})
export class ChatbotComponent {
 
  userMessage = '';
  botResponse = '';

  constructor(private chatService: ChatService,private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {
    this.addClickOutsideListener();
  }

  sendMessage() {
    if (!this.userMessage.trim()) return;

    this.botResponse = 'Thinking...';

    this.chatService.sendMessage(this.userMessage).subscribe(
      (response) => {
        this.botResponse = response.choices[0]?.message?.content || 'No response';
      },
      (error) => {
        console.error('Error:', error);
        this.botResponse = 'Oops! Something went wrong. Please try again.';
      }
    );
    this.userMessage = '';
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
    // const isScrollEvent = this.isScrollEvent(event);

    if (!isClickInside) {
      this.closeChatWindow();
    }
  });
}

// @HostListener('window:scroll', ['$event'])
// onScroll(event: any) {
//   // Close the chat window on scroll
//   this.closeChatWindow();
// }
  
}
