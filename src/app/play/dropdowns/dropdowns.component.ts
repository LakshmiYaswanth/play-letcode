import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdowns',
  templateUrl: './dropdowns.component.html',
  styleUrls: ['./dropdowns.component.css']
})
export class DropdownsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  changed: string = '';
  onChanged(changed: any) {
    this.changed = changed.target.selectedOptions[0].textContent;
    if (this.changed == "Select Fruit") {
      this.changed = ''
    }
  }
  hero: string = '';
  onhero(heo: any) {
    this.hero = heo.target.selectedOptions[0].textContent;
  }
  pl: string = '';
  pgmlan(pl: any) {
    this.hero = pl.target.selectedOptions[0].textContent;
  }


}
