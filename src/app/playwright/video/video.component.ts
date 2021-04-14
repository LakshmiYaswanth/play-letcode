import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'pw-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  constructor(
    private sanitizer: DomSanitizer,
  ) { }
  data = 'https://www.youtube.com/embed/';
  list: any[] =
    [
      {
        video: this.sanitizer.bypassSecurityTrustResourceUrl(this.data + 'zY-IoTYcbWs'),
        title: "1. What is Playwright? | Playwright with Typescript & Jest - Part 1"
      }, {
        video: this.sanitizer.bypassSecurityTrustResourceUrl(this.data + 'DbdqflN3dJ4'),
        title: "2. Playwright Jest Config & Launch Browser | Playwright - Part 2"
      },
      {
        video: this.sanitizer.bypassSecurityTrustResourceUrl(this.data + '9xEzNdG4XaQ'),
        title: "3. First Script - Auto Waits | Playwright - Part 3"
      }, {
        video: this.sanitizer.bypassSecurityTrustResourceUrl(this.data + 'gb43GiWwQKg'),
        title: "4. Codeless Automation With PlayWright | Playwright - Part 4"
      }
    ]

  ngOnInit(): void {
  }

}
