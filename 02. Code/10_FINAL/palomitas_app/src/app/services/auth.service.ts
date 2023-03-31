import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RequestTokenRoot } from '../models/auth-request-token.interface';
import { CreateSessionRoot } from '../models/create-session.interface';
import { CreateSessionDto } from '../models/dto/create-session.dto';
import { Constants } from '../utils/constants';

const AUTH_BASE_URL = environment.apiUrl + '/authentication';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  createRequestToken(): Observable<RequestTokenRoot> {
    return this.http.get<RequestTokenRoot>(`${AUTH_BASE_URL}/token/new?api_key=${environment.apiKey}`);
  }

  createSession(): Observable<CreateSessionRoot> {
    let token = localStorage.getItem(Constants.LOCAL_REQUEST_TOKEN);
    let sessionDto = {};
    if(token != null) {
      sessionDto = new CreateSessionDto(token);
    }
    return this.http.post<CreateSessionRoot>(
      `${AUTH_BASE_URL}/session/new?api_key=${environment.apiKey}`,
      sessionDto,
      { 'headers': new HttpHeaders({
        'Content-Type': 'application/json'
      }) });

  }
}
