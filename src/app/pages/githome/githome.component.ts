import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GithubService } from "../../service/github.service"
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-githome',
  templateUrl: './githome.component.html'
})
export class GithomeComponent implements OnInit {
  user = null;
  username: string;
  error = null;

  constructor(
    private ref: ChangeDetectorRef,
    private githibService: GithubService,
    private spinner: NgxSpinnerService
  ) { }
  ngOnInit(): void { }

  findUser() {
    this.spinner.show();
    this.githibService.getUserDetail(this.username
    ).subscribe((user) => {
      this.user = user
      this.error = null;
      this.ref.detectChanges();
      this.spinner.hide();
    }, (err) => {
      this.spinner.hide();
      this.user = null;
      this.error = "User not found";
      this.ref.detectChanges();
    })
  }
}
