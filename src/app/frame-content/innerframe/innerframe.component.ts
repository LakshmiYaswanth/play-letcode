import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-innerframe',
  templateUrl: './innerframe.component.html'
})
export class InnerframeComponent implements OnInit, OnChanges {

  @Input() name: string;
  constructor(private changeRef: ChangeDetectorRef) { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.name) {
      this.changeRef.detectChanges();
    }

  }

}
