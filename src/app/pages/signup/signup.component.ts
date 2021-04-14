import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';
import { NgxSpinnerService } from "ngx-spinner";
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';

// AuthService
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  faUser = faUser;
  faEnvelope = faEnvelope;
  faLock = faLock;

  constructor(
    private auth: AuthService,
    private router: Router,
    private toaster: ToastrService,
    private spinner: NgxSpinnerService

  ) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    this.spinner.show();
    const { name, email, password } = form.form.value;
    this.auth.signUp(email, password)
      .then(res => {
        res.user.updateProfile({
          displayName: name
        })
        this.spinner.hide();
        this.router.navigateByUrl('/');
        this.toaster.success("You have logged in " + name)
      })
      .catch(e => {
        this.spinner.hide();
        this.toaster.error(e);
      })

  }

}
