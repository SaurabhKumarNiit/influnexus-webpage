import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { EditingDataService } from '../services/editing-data.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Register } from 'src/models/Register';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-video-request',
  templateUrl: './video-request.component.html',
  styleUrls: ['./video-request.component.css'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter', animate('1s ease-out')),
    ]),
  ],
})
export class VideoRequestComponent {

  constructor(
  
    private service: EditingDataService,
    private route: Router
  ) {}
  

  note:Register={email:'',name:'',phone:'',duration:'',videoType:'',platform:'',frequency:'',budget:'',specifications:'',genre:'',afterEffects:'',animationType:'',requirment:'',selectedCurrency:''};

 

  currencies = [
    { code: 'INR', name: 'Indian' },
    { code: 'USD', name: 'US Dollar' },
    { code: 'EUR', name: 'Euro' },
    { code: 'GBP', name: 'British Pound' }
  ];

  onSubmit(form: NgForm){
    if (form.valid) {
      console.log('Form submitted successfully!');
      console.log('Selected Currency:', this.note.selectedCurrency);
      console.log(this.note);
      
      this.service.videoRequest(this.note).subscribe(response=>{

        Swal.fire({
          title:
            'Successfully Submitted',
          showClass: {
            popup: 'animate__animated animate__fadeInDown',
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp',
          },
        });

      }) 

      form.resetForm();
    
    } else {

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please check required fields *',
      });
    }
  }

}
