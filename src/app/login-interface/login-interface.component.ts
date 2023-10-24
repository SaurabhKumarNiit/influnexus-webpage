import { Component, OnInit } from '@angular/core';
import { FormBuilder,NgForm,Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import jwt_decode from 'jwt-decode';
import Swal from 'sweetalert2';
import { EditingDataService } from '../services/editing-data.service';
import { FacebookLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';
import { User } from 'src/models/User';

@Component({
  selector: 'app-login-interface',
  templateUrl: './login-interface.component.html',
  styleUrls: ['./login-interface.component.css']
})
export class LoginInterfaceComponent implements  OnInit {
  
 
  constructor(private service :EditingDataService,private fb : FormBuilder, private router : Router,private socialService: SocialAuthService) { }

  loginForm = this.fb.group({
    email: ['',Validators.required],
    password: ['',Validators.required]
  })
  get email() { return this.loginForm.get("email") }
  get password() { return this.loginForm.get("password") }

  user:any;
  loggedIn:any;
 
  saveGoogleData() {

    console.log(this.user.email);
    
  }
 
  ngOnInit() {
    this.socialService.authState.subscribe((data) => {
      this.user = data;
      this.loginUser=data;
      this.loggedIn = (data != null);
      console.log(this.user)

      if (this.loggedIn) {
        this.verifydata();
      }
    });
  }


  loginUser: User = { id: '', name:'', email:'',photoUrl:''};
 
  signInWithFB(): void {
    
    this.socialService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  
  verifydata() {
    this.service
      .saveGoogleInfo({
        id: this.user.id,
        name: this.user.name,
        email: this.user.email,
        photoUrl: this.user.photoUrl,
      })
      .subscribe(
        (data) => {
          console.log(data);

          console.log(this.user.email);
          localStorage.setItem('email',this.user.email);

          Swal.fire({
            title:
              'You are SuccessFully Login',
            showClass: {
              popup: 'animate__animated animate__fadeInDown',
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp',
            },
          });
          // this.registrationForm.reset();
          this.router.navigateByUrl('/home');
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          });
        }
      );
  }

  data: any;
  decodeData: any;
  userEmail : any;

check(){
  console.log('Response from server:', this.loginForm.value);
}


  onSubmit() {
    this.service.loginCustomer(this.loginForm.value).subscribe(response => {
      // Handle the response from the server here
      console.log('Response from server:', this.loginForm.value);
      console.log('Response from server:', response);
      this.router.navigateByUrl('home');
      
    });
  }




  logindata(){
    this.service.loginCustomer(this.loginForm.value).subscribe(
      res => {
        console.log(this.loginForm.value);
             console.log(res);
            //  this.data = res;

            //  console.log(this.data.token);
            //  this.decodeData = jwt_decode(this.data.token);
            //  console.log(this.decodeData);

            //  this.userEmail = this.decodeData.sub;
             console.log(this.email);
             localStorage.setItem('email',this.userEmail);
            //  localStorage.setItem('jwt',this.data.token);

             Swal.fire({
              title: 'You are Logged In Successfully',
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
        text: 'Please Enter Correct Email and Password!',
      })
     }
     )   
  }


  logindataOfAdmin(){
    const data1 = this.loginForm.value;
    // console.log("data1",data1);
    if(data1.email =='admin@gmail.com' && data1.password =='@Admin123'){
      this.service.loginAdmin(data1).subscribe(
        (res:any) => {
              //  console.log(res);
               this.data = res;
  
              //  console.log(this.data.token);
              //  this.decodeData = jwt_decode(this.data.token);
              //  console.log(this.decodeData);
  
              //  this.userEmail = this.decodeData.sub;
              //  console.log(this.email);
               localStorage.setItem('email',this.userEmail);
              //  localStorage.setItem('jwt',this.data.token);
  
               Swal.fire({
                title: 'You are Logged In Successfully',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
                });
  
               this.router.navigateByUrl('/admin');
       },
       error=>{
        Swal.fire({
          icon: 'error',
          title: 'Failed...',
          text: 'Please Enter Correct Email and Password!',
        })
       }
       )
    } 
  }
  
  fbLogin(){

  }


}
