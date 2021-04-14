import { NgModule } from '@angular/core';
import { AngularFireAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo } from "@angular/fire/auth-guard";
import { RouterModule, Routes } from '@angular/router';
import { FrameContentComponent } from './frame-content/frame-content.component';
import { InnerframeComponent } from './frame-content/innerframe/innerframe.component';
import { InterviewComponent } from './interview/interview.component';
import { LetxComponent } from './letxpath/letx/letx.component';
import { UninstallComponent } from './letxpath/uninstall/uninstall.component';
import { MainComponent } from './main/main.component';
import { GithomeComponent } from './pages/githome/githome.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AlertComponent } from './play/alert/alert.component';
import { ButtonsComponent } from './play/buttons/buttons.component';
import { DraggableComponent } from './play/draggable/draggable.component';
import { DropdownsComponent } from './play/dropdowns/dropdowns.component';
import { FilemanagementComponent } from './play/filemanagement/filemanagement.component';
import { FormsComponent } from './play/forms/forms.component';
import { FramesComponent } from './play/frames/frames.component';
import { FunComponent } from './play/fun/fun.component';
import { InputComponent } from './play/input/input.component';
import { RadioCheckComponent } from './play/radio-check/radio-check.component';
import { TestSiteComponent } from './play/test-site/test-site.component';
import { WaitsComponent } from './play/waits/waits.component';
import { WindowsComponent } from './play/windows/windows.component';
import { WordGeneratorComponent } from './play/word-generator/word-generator.component';
import { HomeComponent } from './tutorial/home/home.component';
import { EmbedVideoComponent } from './videos/embed-video/embed-video.component';
import { VideosComponent } from './videos/videos.component';
import { PlaywrightComponent } from './playwright/playwright.component';
import { PracticeComponent } from './practice/practice.component';
import { CalenderComponent } from './play/calender/calender.component';
const toSignIn = () => redirectUnauthorizedTo(['signin']);
const redirectLoggedInToItems = () => redirectLoggedInTo(['profile']);

const routes: Routes = [
  {
    path: 'signin', component: SigninComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToItems }
  },
  {
    path: "signup",
    component: SignupComponent,
  },
  {
    path: "profile",
    component: ProfileComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: toSignIn }

  }, 
  {
    path: "videos",
    component: VideosComponent
  },
  {
    path: "test",
    component: TestSiteComponent
  },
  {
    path: "draggable",
    component: DraggableComponent
  },
  {
    path: "buttons",
    component: ButtonsComponent
  },
  {
    path: "alert",
    component: AlertComponent
  },
  {
    path: "windows",
    component: WindowsComponent
  },
  {
    path: "calendar",
    component: CalenderComponent
  },
  {
    path: "dropdowns",
    component: DropdownsComponent
  },
  {
    path: "edit",
    component: InputComponent
  },
  {
    path: "fun",
    component: FunComponent,
  },
  {
    path: "letxpath",
    component: LetxComponent
  },
  {
    path: "tutorial",
    component: HomeComponent
  },
  {
    path: "radio",
    component: RadioCheckComponent
  },
  {
    path: 'elements',
    component: GithomeComponent,
  },
  {
    path: "frameUI",
    component: FrameContentComponent
  },
  {
    path: "frame",
    component: FramesComponent
  },
 
  {
    path: "waits",
    component: WaitsComponent
  },
 
  {
    path: "slider",
    component: WordGeneratorComponent
  },
  {
    path: "forms",
    component: FormsComponent
  },
 

  {
    path: "file",
    component: FilemanagementComponent
  },
  {
    path: "uninstall",
    component: UninstallComponent
  },
  {
    path: "video/:name",
    component: EmbedVideoComponent
  },
  {
    path: "interview/:name",
    component: InterviewComponent
  },
  {
    path: "innerFrame",
    component: InnerframeComponent
  },
  {
    path: "playwright",
    component: PlaywrightComponent
  },
  {
    path: "test-practice",
    component: PracticeComponent
  },
  {
    path: "",
    component: MainComponent
  },

  {
    path: "**",
    component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [InputComponent, FunComponent]
