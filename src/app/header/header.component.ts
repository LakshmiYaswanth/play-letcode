import { Component, OnInit } from '@angular/core';
import { AuthService } from "../service/auth.service";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  email = null;
  src = '';
  constructor(
    private auth: AuthService,
    private router: Router,
    private toast: ToastrService) {
    auth.getUser()
      .subscribe((user) => {
        this.email = user?.email;
        this.src = 'https://robohash.org/' + user?.displayName;
      })
  }

  ngOnInit(): void {
  }

  async signOut() {
    try {
      this.auth.logout()
        .then(res => {
          this.router.navigateByUrl('/');
          this.toast.info('Bye! See you soon :)');
          this.email = null;
        })
    } catch (error) {
      this.toast.error(error);
    }
  }
  openBurger() {
    let burger: any = document.querySelector(".burger")
    burger.classList.toggle("is-active")
    let nav = document.querySelector("#" + burger.dataset.target)
    nav.classList.toggle("is-active")
  }
}
