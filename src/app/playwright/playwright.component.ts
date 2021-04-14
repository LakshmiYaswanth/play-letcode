import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-playwright',
  templateUrl: './playwright.component.html',
  styleUrls: ['./playwright.component.css']
})
export class PlaywrightComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle("Playwright - LetCode");
  }
  ngOnInit(): void {
  }

}
