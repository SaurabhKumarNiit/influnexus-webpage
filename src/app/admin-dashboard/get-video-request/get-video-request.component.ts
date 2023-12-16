import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EditingDataService } from 'src/app/services/editing-data.service';

@Component({
  selector: 'app-get-video-request',
  templateUrl: './get-video-request.component.html',
  styleUrls: ['./get-video-request.component.css']
})
export class GetVideoRequestComponent {

  public vedioInfo : any
 

  constructor(private activateRoute:ActivatedRoute,private editingService:EditingDataService) { }


  ngOnInit(): void {
      this.editingService.getVedioRequestData().subscribe({
      next:data=>{
        this.vedioInfo=data;

      },
      error:e=>{
      alert("Failed due to Network Error");
      }
    })
  }

}
