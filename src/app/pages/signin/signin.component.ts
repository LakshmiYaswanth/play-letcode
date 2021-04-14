import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';
import { NgxSpinnerService } from "ngx-spinner";
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user = faEnvelope;
  pass = faLock;
  constructor(
    private auth: AuthService,
    private router: Router,
    private toaster: ToastrService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
  }
  onSubmit(f: NgForm) {
    this.spinner.show();
    const { email, password } = f.form.value;
    this.auth.signIn(email, password)
      .then(res => {
        this.spinner.hide();
        // this.router.navigateByUrl('profile');
        this.router.navigateByUrl('/');
        this.toaster.info("Welcome " + res.user.displayName)
      })
      .catch(e => {
        this.spinner.hide();
        this.toaster.error(e);
      })

  }
  forgot(fg: NgForm) {
    let notification = document.querySelector('.notification');
    const { fgEmail } = fg.form.value;
    this.auth.forgotPassword(fgEmail).then(
      res => {
        notification.classList.remove('is-danger');
        notification.classList.remove('is-hidden');
        notification.classList.add('is-primary');
        notification.textContent = 'Reset password link has been sent to your email, Please check to continue';
      }
    ).catch(err => {
      notification.classList.remove('is-hidden');
      notification.classList.remove('is-primary');
      notification.classList.add('is-danger');
      notification.textContent = err;
    })
  }
  onClick() {
    let modal = document.getElementsByClassName("modal")[0];
    modal.classList.add("is-active")
  }
  onClose() {
    let modal = document.getElementsByClassName("modal")[0];
    modal.classList.remove("is-active");
    let notification = document.querySelector('.notification');
    notification.classList.add('is-hidden');
  }
}
