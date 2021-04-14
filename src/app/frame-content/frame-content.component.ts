import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-frame-content',
  templateUrl: './frame-content.component.html'
})
export class FrameContentComponent {
  constructor(private ref: ChangeDetectorRef) {

  }

  fname: string;
  lname: string;

  onSubmit() {
    console.log(this.fname);
    console.log(this.lname);
    this.ref.detectChanges();
    // this.user = f.form
    // this.ref.detectChanges();
  }
  myLoadEvent(e: { contentDocument: any; }) {
    var a = e.contentDocument;
    a.querySelectorAll("body > app-root > div > app-header")[0].style.display = "none";
    // a.querySelectorAll("body > app-root > div > app-footer")[0].style.display = "none";
  }

}
