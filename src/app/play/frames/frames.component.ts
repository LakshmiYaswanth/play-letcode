import { Component } from '@angular/core';

@Component({
  selector: 'app-frames',
  templateUrl: './frames.component.html',
  styleUrls: ['./frame.css']
})
export class FramesComponent {

  myLoadEvent(e: { contentDocument: any; }) {
    var a = e.contentDocument;
    a.querySelectorAll("body > app-root > div > app-header")[0].style.display = "none";
    a.querySelectorAll("body > app-root > div > app-footer")[0].style.display = "none";
  }
}
