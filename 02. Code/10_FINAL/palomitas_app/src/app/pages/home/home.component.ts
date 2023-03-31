import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Constants } from 'src/app/utils/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  isLoggedIn = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    console.log('Home component initialized');
    if(localStorage.getItem(Constants.LOCAL_ACCOUNT_USERNAME) != null) {
      this.isLoggedIn = true;
    }
  }

  ngOnDestroy(): void {
    console.log('Home component destroyed');
  }


  doLogin() {
    this.authService.createRequestToken().subscribe(resp => {
      console.log(resp);
      localStorage.setItem(Constants.LOCAL_REQUEST_TOKEN, resp.request_token);
      window.location.href = `https://www.themoviedb.org/authenticate/${resp.request_token}?redirect_to=http://localhost:49673/user-permission`;
    });
    }

    getUsername() {
      return localStorage.getItem(Constants.LOCAL_ACCOUNT_USERNAME);
    }

    doLogout() {
      localStorage.clear();
      this.isLoggedIn = false;
    }

    getAvatar() {
      let avatar = localStorage.getItem(Constants.LOCAL_ACCOUNT_AVATAR);
      return `https://image.tmdb.org/t/p/w500${avatar}`;
      }
}
