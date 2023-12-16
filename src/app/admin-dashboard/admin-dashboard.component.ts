import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EditingDataService } from '../services/editing-data.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  
  //Sidebar toggle show hide function
  status = false;
  addToggle()
  {
    this.status = !this.status;       
  }

  constructor(private activateRoute:ActivatedRoute,private editingService:EditingDataService) { }

  userinfo:any = { name: '', email:'', id:'',photoUrl:''};

  public vedioInfo : any

  activeCustomers:number=0;

  totalVideoRequest:number=0;

  totalFeedbacks: number = 0;


  ngOnInit(): void {
      this.editingService.getAllLoginInfo().subscribe({
      next:data=>{
        this.userinfo=data;
        this.activeCustomers=data.length;

      },
      error:e=>{
      alert("Failed due to Network Error");
      }
    }),

    this.editingService.getVedioRequestData().subscribe({
      next:data=>{
        this.vedioInfo=data;
        this.totalVideoRequest=data.length;

      },
      error:e=>{
      alert("Failed due to Network Error");
      }
    }),

    this.editingService.getAllFeedbacks().subscribe({
      next:data=>{
        this.totalFeedbacks=data.length;

      },
      error:e=>{
      alert("Failed due to Network Error");
      }
    })
    
  }

  }

