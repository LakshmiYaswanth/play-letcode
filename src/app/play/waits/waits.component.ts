import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-waits',
  templateUrl: './waits.component.html'
})
export class WaitsComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }
  simple() {
    setTimeout(() => {
      alert("Finally I'm here, just to say Hi :)")
    }, 4500);
  }

}
