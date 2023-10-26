import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';

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

  reciverEmail: string = 'info@influnexus.com';
  subject: string = '';

  submitForm() {
    // Simulate form submission (replace with actual backend API call)
    console.log('Form submitted:', this.formData);
  }

  sendEmail(form: NgForm): void {
   if(form.valid){
     
    console.log("Send");
    const mailtoLink = `mailto:${this.reciverEmail}?subject=${encodeURIComponent(
      this.subject
    )}&body=${encodeURIComponent(`Name: ${this.formData.name}\nEmail: ${this.formData.email}\n\n${this.formData.message}`)}`;

    window.location.href = mailtoLink;

    form.resetForm();
   }
   else {

    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Please check required fields *',
    });
  }
}
}
