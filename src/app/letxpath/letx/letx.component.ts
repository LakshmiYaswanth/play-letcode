import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-letx',
  templateUrl: './letx.component.html'
  // styleUrls: ['./letx.component.css']
})
export class LetxComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle("LetXPath - XPath tool");
  }
}
