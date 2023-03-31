import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { AuthService } from 'src/app/services/auth.service';
import { Constants } from 'src/app/utils/constants';

@Component({
  selector: 'app-user-permission',
  templateUrl: './user-permission.component.html',
  styleUrls: ['./user-permission.component.css']
})
export class UserPermissionComponent implements OnInit {

  constructor(private authService: AuthService, private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
    this.authService.createSession().subscribe(resp => {
      localStorage.setItem(Constants.LOCAL_SESSION_ID, resp.session_id);
      this.accountService.getDetails().subscribe(resp => {
        console.log(resp);
        localStorage.setItem(Constants.LOCAL_ACCOUNT_USERNAME, resp.username);
        localStorage.setItem(Constants.LOCAL_ACCOUNT_AVATAR, resp.avatar.tmdb.avatar_path);
        localStorage.setItem(Constants.LOCAL_ACCOUNT_ID, resp.id.toString());
        this.router.navigate(['/home']);
      });
    });
  }

}
