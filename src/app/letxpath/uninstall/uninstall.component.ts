import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-uninstall',
  templateUrl: './uninstall.component.html',
  styleUrls: ['./uninstall.component.css']
})
export class UninstallComponent implements OnInit {

  constructor(
    private sanitizer: DomSanitizer,
  ) { }

  survey: any;

  ngOnInit(): void {
    this.survey = this.sanitizer.bypassSecurityTrustResourceUrl("https://docs.google.com/forms/d/e/1FAIpQLSctkl_aKRpaxMDmae9rS8Y5ybKu7SVXSoaVcrMUsQ-uwTKWyg/viewform?embedded=true");
  }

}
