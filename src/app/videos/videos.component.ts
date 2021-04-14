import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  pro!: SafeResourceUrl;
  js!: SafeResourceUrl;
  ts!: SafeResourceUrl
  cr!: SafeResourceUrl
  sel!: SafeResourceUrl
  jsp!: SafeResourceUrl;
  fun!: SafeResourceUrl;

  constructor(
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit(): void {
    this.pro = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/videoseries?list=PL699Xf-_ilW63aUN3w4HS9IgmPYOGI2hK");
    this.js = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/videoseries?list=PL699Xf-_ilW6kwrOg4Wm87ZJ-idHubBrG")
    this.ts = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/videoseries?list=PL699Xf-_ilW5VXRsJwBJLmDGrsrYxBjQT")
    this.sel = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/videoseries?list=PL699Xf-_ilW569-6sPgZLreeUjbHi41xc")
    this.fun = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/videoseries?list=PL699Xf-_ilW5IONpI4HsWWlNA7LqOdA-Y")
    this.cr = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/videoseries?list=PL699Xf-_ilW7aQ6lBWXjaIheZsduOpcR5")
    this.jsp = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/videoseries?list=PL699Xf-_ilW7O9MIGOOXx1M4b3FsB6Aj5")
  }

}
