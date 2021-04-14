import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-draggable',
  templateUrl: './draggable.component.html',
  styleUrls: ['./draggable.component.css']
})
export class DraggableComponent implements OnInit {

  constructor(private titleService:Title) {
    this.titleService.setTitle("Draggable - LetCode");
  }

  ngOnInit(): void {
  }

}
