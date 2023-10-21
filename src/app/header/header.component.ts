import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { EditingDataService } from '../services/editing-data.service';
import { User } from 'src/models/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  urllink:string = "https://nregsmp.org/eService/images/User.png";
  selectFiles(file:any){
    if(file.target.files){
      const reader = new FileReader()
      reader.readAsDataURL(file.target.files[0])
      reader.onload = (event:any)=>{
        this.urllink = event.target.result
      }
    }

  }


  
  public totalItem : number = 0;
  public searchTerm !: string;

  // currentGame: string ="";
  constructor(private router:Router,private profileService:EditingDataService ) { 
    // this.currentGame = JSON.parse(localStorage.getItem('currentGame')); 
  }

  user: User = { name: '', email:'', id:'',photoUrl:''};

  ngOnInit(): void {
    this.profileService.getSingleUser().subscribe(res=>{
      this.user = res;
      this.urllink = this.user.photoUrl;
    })
  }

//   ngOnDestroy(){     
//     this.currentGame = null;   
// }


logIn(){
  if(localStorage.getItem('email')){
    this.router.navigateByUrl(''),

    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'First LogOut then LogIn agin!',
      
    })
    
  }else{
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'Redirected To login page',
      showConfirmButton: false,
      timer: 1500
    })
  }
}


  logOut(){

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, LogOut!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'LogOut!',
          'Your are Logout...',
          'success'
        ),
        localStorage.removeItem('email'),
          this.router.navigateByUrl('/login'),
          console.log("Log Out Success")
      }
    })
  }


}
