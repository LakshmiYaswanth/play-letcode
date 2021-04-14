

import { A11yModule } from '@angular/cdk/a11y';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
// Firebase
import { AngularFireAuthModule } from '@angular/fire/auth';
// database
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSortModule } from '@angular/material/sort';
import { BrowserModule } from '@angular/platform-browser';
// Toast
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdsenseModule } from 'ng2-adsense';
// spinner to login & sign up
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastrModule } from "ngx-toastr";
import { environment } from 'src/environments/environment';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { FrameContentComponent } from './frame-content/frame-content.component';
import { InnerframeComponent } from './frame-content/innerframe/innerframe.component';
import { HeaderComponent } from './header/header.component';
import { LetxComponent } from './letxpath/letx/letx.component';
import { UninstallComponent } from './letxpath/uninstall/uninstall.component';
import { MainComponent } from './main/main.component';
import { GithomeComponent } from './pages/githome/githome.component';
import { GitreposComponent } from './pages/gitrepos/gitrepos.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UsercardComponent } from './pages/usercard/usercard.component';
import { AlertComponent } from './play/alert/alert.component';
import { ButtonsComponent } from './play/buttons/buttons.component';
import { CounterComponent } from './play/counter/counter.component';
import { DraggableComponent } from './play/draggable/draggable.component';
import { DropdownsComponent } from './play/dropdowns/dropdowns.component';
import { FilemanagementComponent } from './play/filemanagement/filemanagement.component';
import { FramesComponent } from './play/frames/frames.component';
import { FunComponent } from './play/fun/fun.component';
import { InputComponent } from './play/input/input.component';
import { RadioCheckComponent } from './play/radio-check/radio-check.component';
//import {SelectableComponent} from './play/selectable/selectable.component'
import { TestSiteComponent } from './play/test-site/test-site.component';
import { WaitsComponent } from './play/waits/waits.component';
import { WindowsComponent } from './play/windows/windows.component';
import { WordGeneratorComponent } from './play/word-generator/word-generator.component';
import { HomeComponent } from './tutorial/home/home.component';
import { EmbedVideoComponent } from './videos/embed-video/embed-video.component';
import { VideosComponent } from './videos/videos.component';
import { FormsComponent } from './play/forms/forms.component';
import { InterviewComponent } from './interview/interview.component';
import { SafePipe } from './service/safe.pipe';
import { PlaywrightComponent } from './playwright/playwright.component';
import { VideoComponent } from './playwright/video/video.component';
import { PracticeComponent } from './practice/practice.component';
import { NwbDatePickerModule } from '@wizishop/ng-wizi-bulma';
import { RouterModule } from '@angular/router';
import { CalenderComponent } from './play/calender/calender.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    GitreposComponent,
    UsercardComponent,
    SigninComponent,
    SignupComponent,
    GithomeComponent,
    PagenotfoundComponent,
    routingComponents,
    CounterComponent,
    WordGeneratorComponent,
    FunComponent,
    InputComponent,
    TestSiteComponent,
    VideosComponent,
    ButtonsComponent,
    DropdownsComponent,
    AlertComponent,
    WindowsComponent,
    LetxComponent,
    HomeComponent,
    RadioCheckComponent,
    WindowsComponent,
    FramesComponent,
    FrameContentComponent,
    DropdownsComponent,
    DraggableComponent,
    WaitsComponent,
    ProfileComponent,
    UninstallComponent,
    FilemanagementComponent,
    ProfileComponent,
    EmbedVideoComponent,
    InnerframeComponent,
    FormsComponent,
    InterviewComponent,
    SafePipe,
    PlaywrightComponent,
    VideoComponent,
    PracticeComponent,
    CalenderComponent
  ],
  imports: [
    AppRoutingModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAnalyticsModule,
    AngularFireAuthModule,
    HttpClientModule,
    DragDropModule,
    ToastrModule.forRoot(),
    FormsModule,
    MatSortModule,
    NwbDatePickerModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    BrowserModule.withServerTransition({ appId: 'play-letcode' }),
    CommonModule,
    ReactiveFormsModule,
    A11yModule,
    ClipboardModule,
    AngularFireDatabaseModule,
    AdsenseModule.forRoot({
      adClient: 'ca-pub-6251538267574677'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
