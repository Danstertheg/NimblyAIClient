import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountPageComponent } from './account-page/account-page.component';
import { EinsteinChatComponent } from './einstein-chat/einstein-chat.component';
import { EinsteinWriterComponent } from './einstein-writer/einstein-writer.component';
import { FAQPageComponent } from './faq-page/faq-page.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MaintenancePageComponent } from './maintenance-page/maintenance-page.component';
import { NavigationPageComponent } from './navigation-page/navigation-page.component';
import { PremiumPageComponent } from './premium-page/premium-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { ThankYouPageComponent } from './thank-you-page/thank-you-page.component';
import { VerificationPageComponent } from './verification-page/verification-page.component';

const routes: Routes = [  
  {path: 'einsteinWriter', component: EinsteinWriterComponent },
  {path: 'einsteinChat', component: EinsteinChatComponent },
  {path: '', component: HomepageComponent },
  {path: 'loginPage',component: LoginPageComponent},
  {path: 'signupPage',component:SignupPageComponent},
  {path: 'premiumPage', component:PremiumPageComponent},
  {path: 'thankYouPage', component:ThankYouPageComponent},
  {path: 'accountPage', component:AccountPageComponent},
  {path: 'navigationPage', component:NavigationPageComponent},
  {path: 'verificationPage', component:VerificationPageComponent},
  {path: 'FAQPage', component:FAQPageComponent},
  {path: 'maintenance', component:MaintenancePageComponent},
  {path: 'feedback', component:FeedbackFormComponent},
  {path: 'landingPage', component:LandingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
