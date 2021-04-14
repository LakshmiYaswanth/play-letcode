import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-windows',
  templateUrl: './windows.component.html',
  styleUrls: ['./windows.component.css']
})
export class WindowsComponent implements OnInit {
  constructor(private titleService:Title) {
    this.titleService.setTitle("Window handling - LetCode");
  }
  openRequestedPopup() {
     var myWindow=window.open("/test", "test-site","menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes" );
  }
  openRequestedPopup2() {
    
    var myWindow=window.open("/alert", "alert","menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes" );
    var myWindow=window.open("/dropdowns", "dropdowns","menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes" );
 }
  
  ngOnInit(): void {
  }

}
