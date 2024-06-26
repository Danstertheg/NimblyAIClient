import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { TextAreaInputComponent } from './text-area-input/text-area-input.component';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { ButtonComponent } from './button/button.component';
import { ButtonRightAreaComponent } from './button-right-area/button-right-area.component';
import { EinsteinWriterComponent } from './einstein-writer/einstein-writer.component';
import { EinsteinChatComponent } from './einstein-chat/einstein-chat.component';
import { RouterModule } from '@angular/router';
import { ChatOptionsComponent } from './chat-options/chat-options.component';
import { ChatOptionComponent } from './chat-option/chat-option.component';
import { ChatlogsComponent } from './chatlogs/chatlogs.component';
import { LandingBannerComponent } from './landing-banner/landing-banner.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { ButtonBottomRowComponent } from './button-bottom-row/button-bottom-row.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PremiumModalComponent } from './premium-modal/premium-modal/premium-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { SpinnerOverlayComponentComponent } from './spinner-overlay-component/spinner-overlay-component.component';
import { PremiumPageComponent } from './premium-page/premium-page.component';
import { PaymentModalComponent } from './payment-modal/payment-modal.component';
import { ChatMessageComponent } from './chat-message/chat-message.component';
import { BuyCreditsModalComponent } from './buy-credits-modal/buy-credits-modal.component';
import { ThankYouPageComponent } from './thank-you-page/thank-you-page.component';
import { AccountPageComponent } from './account-page/account-page.component';
import { ConversationRequestComponent } from './conversation-request/conversation-request.component';
import { CreateNewConversationComponent } from './chat-dialogs/create-new-conversation/create-new-conversation.component';
import { HandleConversationRequestComponent } from './chat-dialogs/handle-conversation-request/handle-conversation-request.component';
import { AddUserToConversationComponent } from './chat-dialogs/add-user-to-conversation/add-user-to-conversation.component';
import { ExitConversationComponent } from './chat-dialogs/exit-conversation/exit-conversation.component';
import { NavigationPageComponent } from './navigation-page/navigation-page.component';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SuccessfulRequestSendComponent } from './chat-dialogs/successful-request-send/successful-request-send.component';
import { SuccessSignupMsgComponent } from './success-signup-msg/success-signup-msg.component';
import { VerificationPageComponent } from './verification-page/verification-page.component';
import { FAQPageComponent } from './faq-page/faq-page.component';
import { MaintenancePageComponent } from './maintenance-page/maintenance-page.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    ChatboxComponent,
    TextAreaInputComponent,
    ButtonComponent,
    ButtonRightAreaComponent,
    EinsteinWriterComponent,
    EinsteinChatComponent,
    ChatOptionsComponent,
    ChatOptionComponent,
    ChatlogsComponent,
    LandingBannerComponent,
    LoginPageComponent,
    SignupPageComponent,
    ButtonBottomRowComponent,
    PremiumModalComponent,
    SpinnerOverlayComponentComponent,
    PremiumPageComponent,
    PaymentModalComponent,
    ChatMessageComponent,
    BuyCreditsModalComponent,
    ThankYouPageComponent,
    AccountPageComponent,
    ConversationRequestComponent,
    CreateNewConversationComponent,
    HandleConversationRequestComponent,
    AddUserToConversationComponent,
    ExitConversationComponent,
    NavigationPageComponent,
    SuccessfulRequestSendComponent,
    SuccessSignupMsgComponent,
    VerificationPageComponent,
    FAQPageComponent,
    MaintenancePageComponent,
    FeedbackFormComponent,
    LandingPageComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EditorModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatButtonToggleModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ClipboardModule,
    MatTooltipModule
  ],
  providers: [
    TextAreaInputComponent,
    {
      provide: MatDialogRef,
      useValue: {}
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
