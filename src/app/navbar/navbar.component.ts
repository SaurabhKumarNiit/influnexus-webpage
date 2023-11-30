import { Component, ElementRef, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { EditingDataService } from '../services/editing-data.service';
import { Router } from '@angular/router';
import { User } from 'src/models/User';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isNavbarCollapsed = false;

toggleNavbar(): void {
  this.isNavbarCollapsed = !this.isNavbarCollapsed;
}
  
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

reload(){
  window.location.reload();
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
      console.log(this.user.email+'Email');
      this.profileService.RemoveUser(this.user.email).subscribe(res=>{

        console.log("Removed Success");
      });

      if (result.isConfirmed) {
       
        Swal.fire(
          'LogOut!',
          'Your are Logout...',
          'success'
        ),
        localStorage.removeItem('email'),
          this.router.navigateByUrl('/login'),
          console.log("Log Out Success");
          setTimeout(() => {
            window.location.reload();
          }, 2000);
          
         
      }
    })
  }

}
