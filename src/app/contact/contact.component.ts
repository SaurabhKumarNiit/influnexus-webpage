import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter', animate('1s ease-out')),
    ]),
  ],
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: '',
  };

  submitForm() {
    // Simulate form submission (replace with actual backend API call)
    console.log('Form submitted:', this.formData);
  }
}
