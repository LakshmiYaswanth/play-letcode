import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle("Inputs - LetCode");
  }

  ngOnInit(): void {
  }

}
