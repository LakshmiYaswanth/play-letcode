import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-embed-video',
  templateUrl: './embed-video.component.html',
  styleUrls: ['./embed-video.component.css']
})
export class EmbedVideoComponent implements OnInit {
  safeurlSel!: SafeResourceUrl;
  safeurlPro!: SafeResourceUrl;
  title!: string;
  routesub!: Subscription;
  constructor(private route: ActivatedRoute,
    private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.routesub = this.route.params.subscribe(params => {
      console.log(params);
      console.log('selenium ' + this.VideosList[params['name']].sel);
      console.log('Protr ' + this.VideosList[params['name']].pro);
      this.safeurlSel = this.sanitizer.bypassSecurityTrustResourceUrl(this.VideosList[params['name']].sel)
      this.safeurlPro = this.sanitizer.bypassSecurityTrustResourceUrl(this.VideosList[params['name']].pro)
      this.title = this.VideosList[params['name']].title;
    });
  }
  ngOnDestroy(): void {
    this.routesub.unsubscribe();
  }
  data = 'https://www.youtube.com/embed/';
  VideosList:any= {
    edit: {
      'sel': this.data + 'ZT-IeKZiy5s',
      'pro': this.data + '4Xd9shK8iOc',
      'title': 'Interact with Inputs'
    },
    button: {
      'sel': this.data + 'ovImXEsKz1M',
      'pro': this.data + 'u3M6Ofm839c',
      'title': 'Interact with Buttons'
    }
  }

}