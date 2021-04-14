import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./style.css']

})
export class PracticeComponent implements OnInit {

  data = 'https://www.youtube.com/embed/';
  pre: SafeResourceUrl;
  v1: SafeResourceUrl;
  v3: SafeResourceUrl;
  v2: SafeResourceUrl;
  constructor(private route: ActivatedRoute,
    private sanitizer: DomSanitizer, private title: Title) {
    this.title.setTitle("Practice like a Pro - LetCode");
  }

  ngOnInit(): void {
    this.pre = this.sanitizer.bypassSecurityTrustResourceUrl(this.data + 't1etgfBmBf8')
    this.v1 = this.sanitizer.bypassSecurityTrustResourceUrl(this.data + 'NKFBGpQ4EPY')
    this.v2 = this.sanitizer.bypassSecurityTrustResourceUrl(this.data + 'DIQqgm3qU7o')
    this.v3 = this.sanitizer.bypassSecurityTrustResourceUrl(this.data + '3V8ejGFa5A0')
  }
}