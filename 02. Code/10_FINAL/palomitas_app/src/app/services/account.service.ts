import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AccountDetailsRoot } from '../models/account-details.interface';
import { Constants } from '../utils/constants';

const ACCOUNT_BASE_URL = environment.apiUrl + '/account';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  getDetails(): Observable<AccountDetailsRoot> {
    let sessionId = localStorage.getItem(Constants.LOCAL_SESSION_ID);
    return this.http.get<AccountDetailsRoot>(`${ACCOUNT_BASE_URL}?api_key=${environment.apiKey}&session_id=${sessionId}`);
  }
}
