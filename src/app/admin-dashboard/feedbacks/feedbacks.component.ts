import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EditingDataService } from 'src/app/services/editing-data.service';


@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.css']
})
export class FeedbacksComponent {


  constructor(private activateRoute:ActivatedRoute,private editingService:EditingDataService) { }

  userinfo:any = { email:'', rating:'',experience:''};

  feedbacks: any[] = [];

  feedbackLength:number=this.feedbacks.length;

  check(){
    console.log(this.feedbacks.length);
  }

  public vedioInfo : any

  ngOnInit(): void {
      this.editingService.getAllFeedbacks().subscribe({
      next:data=>{
        this.userinfo=data;
        this.feedbacks=data;

      },
      error:e=>{
      alert("Failed due to Network Error");
      }
    })
  }

}
