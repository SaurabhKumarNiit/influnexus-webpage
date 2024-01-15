import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressBarModule} from '@angular/material/progress-bar';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { LoginInterfaceComponent } from './login-interface/login-interface.component';
import { RegisterInterfaceComponent } from './register-interface/register-interface.component';
import { VideoRequestComponent } from './video-request/video-request.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';
import { FeedbackComponent } from './feedback/feedback.component';


import { SocialLoginModule, SocialAuthServiceConfig, FacebookLoginProvider } from '@abacritt/angularx-social-login';
import {
  GoogleLoginProvider
} from '@abacritt/angularx-social-login';
import {  GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
import { DisplayPlayerComponent } from './display-player/display-player.component';

import { FilterByCategoryPipe } from './filter-by-category.pipe';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ActiveUserComponent } from './admin-dashboard/active-user/active-user.component';
import { FeedbacksComponent } from './admin-dashboard/feedbacks/feedbacks.component';
import { GetVideoRequestComponent } from './admin-dashboard/get-video-request/get-video-request.component';
import { TrainedChatbotComponent } from './trained-chatbot/trained-chatbot.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    VideoPlayerComponent,
    LoginInterfaceComponent,
    RegisterInterfaceComponent,
    VideoRequestComponent,
    ContactComponent,
    AboutComponent,
    FaqComponent,
    FeedbackComponent,
    DisplayPlayerComponent,
    FilterByCategoryPipe,
    ChatbotComponent,
    AdminDashboardComponent,
    ActiveUserComponent,
    FeedbacksComponent,
    GetVideoRequestComponent,
    TrainedChatbotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    GoogleSigninButtonModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatProgressBarModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '354917431940-isn52pl5oe945tl4lepod9g4j2bsnm0s.apps.googleusercontent.com'            
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('304432238964077')
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
