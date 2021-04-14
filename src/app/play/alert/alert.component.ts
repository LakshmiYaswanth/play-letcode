import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html'
})
export class AlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  simple() {
    alert('Hey! Welcome to LetCome')
  }
  bool: boolean = false;
  myConfirm() {
    let bool = confirm('Are you happy with LetCode');
    if (bool) {
      this.bool = bool;
    }
    else { bool = false }
  }
  myName = '';
  myPrompt(name: any) {
    this.myName = prompt("Enter your name")
    console.log(this.myName);

  }
  onclick() {
    let modal = document.getElementsByClassName("modal")[0];
    modal.classList.add("is-active")
  }
  onClose() {
    let modal = document.getElementsByClassName("modal")[0];
    modal.classList.remove("is-active")
  }
}
