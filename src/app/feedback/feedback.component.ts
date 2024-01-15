// import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { EditingDataService } from '../services/editing-data.service';
import { Feedback } from 'src/models/Feedback';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {

  constructor(private service :EditingDataService,private fb : FormBuilder, private router : Router){}

  ratingcount=0;
  totalrating=0

  Finalrating:any;

  ratingcontrol=new FormControl(0);
  GetRating(){
    this.ratingcount++;
    this.totalrating +=this.ratingcontrol?.value || 0;
    //console.log(this.ratingcontrol.value);
    this.Finalrating= (this.totalrating/this.ratingcount).toFixed(2)
  }

  feedback:Feedback={email:'',rating:'',experience:''};

  getUserEmail(){
    
    return localStorage.getItem("email")
  }
  

  feedbackForm = this.fb.group({
    email: ['',Validators.required],
    rating: ['',Validators.required],
    experience: ['',Validators.required]
  })
  get email() { return this.feedbackForm.get("email") }
  get rating() { return this.feedbackForm.get("rating") }
  get experience() { return this.feedbackForm.get("experience") }


  saveFeedback(){

    this.feedback.email=localStorage.getItem("email");
    this.feedback.rating='Four Star';


    this.service.saveFeedbacks(this.feedback).subscribe(
      res => {
        console.log(this.feedback.email);
             console.log(res);
            
             Swal.fire({
              title: 'FeedBack Submitted Successfully',
              showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              }
            })

            this.router.navigateByUrl('/home');

            //  window.location.reload();
     },
     error=>
     {
      Swal.fire({
        icon: 'error',
        title: 'Failed...',
        text: 'Please Enter Correct Data',
      })
     }
     )   
  }

}
