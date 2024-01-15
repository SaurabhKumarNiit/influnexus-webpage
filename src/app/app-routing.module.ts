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
import { AuthGuard } from './guard/auth.guard';
import { DisplayPlayerComponent } from './display-player/display-player.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { FeedbacksComponent } from './admin-dashboard/feedbacks/feedbacks.component';
import { GetVideoRequestComponent } from './admin-dashboard/get-video-request/get-video-request.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  // {path:'playback',component:VideoPlayerComponent},
  {path:'login',component:LoginInterfaceComponent},
  {path:'register',component:RegisterInterfaceComponent},
  {path:'video-request',component:VideoRequestComponent},
  // {path:'get-video-request',component:GetVideoRequestComponent},
  // {path:'get-thumbnail-data',component:GetThumbnailInfoComponent},
  {path:'feedback',component:FeedbackComponent,canActivate: [AuthGuard]},
  {path:'faq',component:FaqComponent},
  {path:'contact',component:ContactComponent},
  {path:'about',component:AboutComponent},
  {path:'gallery',component:DisplayPlayerComponent},
  {path:'chatbot',component:ChatbotComponent},
  {path:'admin-data',component:AdminDashboardComponent},
  {path:'login',component:LoginInterfaceComponent},
  // {path:'register',component:RegisterInterfaceComponent},
  // {path:'add-thumbnail',component:ThumbnailVideoComponent},
  {path:'all-feedbacks',component:FeedbacksComponent},
  {path:'get-vedio-request',component:GetVideoRequestComponent},
  // {path:'get-thumbnail-data',component:GetThumbnailInfoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
