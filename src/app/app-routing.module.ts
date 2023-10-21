import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginInterfaceComponent } from './login-interface/login-interface.component';
import { RegisterInterfaceComponent } from './register-interface/register-interface.component';
import { VideoRequestComponent } from './video-request/video-request.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  // {path:'playback',component:VideoPlayerComponent},
  {path:'login',component:LoginInterfaceComponent},
  {path:'register',component:RegisterInterfaceComponent},
  {path:'video-request',component:VideoRequestComponent},
  // {path:'add-thumbnail',component:ThumbnailVideoComponent},
  // {path:'get-video-request',component:GetVideoRequestComponent},
  // {path:'get-thumbnail-data',component:GetThumbnailInfoComponent},
  {path:'feedback',component:FeedbackComponent},
  {path:'faq',component:FaqComponent},
  {path:'contact',component:ContactComponent},
  {path:'about',component:AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
