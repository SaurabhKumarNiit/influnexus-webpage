import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { EditingDataService } from '../services/editing-data.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Register } from 'src/models/Register';

@Component({
  selector: 'app-video-request',
  templateUrl: './video-request.component.html',
  styleUrls: ['./video-request.component.css']
})
export class VideoRequestComponent {

  constructor(
  
    private service: EditingDataService,
    private route: Router
  ) {}
  

  note:Register={email:'',name:'',phone:'',duration:'',videoType:'',platform:'',frequency:'',budget:'',specifications:'',genre:'',afterEffects:'',animationType:'',requirment:''};


  onSubmit(form: NgForm){
    if (form.valid) {
      console.log('Form submitted successfully!');
      console.log(this.note);
      
      this.service.videoRequest(this.note).subscribe(response=>{

        // console.log('Response from server:', response);

        Swal.fire({
          title:
            'Your Video Request Successfully Submitted',
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

      // console.log('Form is invalid. Please check the errors.');
    }
  }

}
