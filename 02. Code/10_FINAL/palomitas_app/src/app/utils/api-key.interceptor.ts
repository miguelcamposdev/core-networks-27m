import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Constants } from './constants';

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let requestCloned = request;
    let sessionId = localStorage.getItem('session_id');

    if(request.url.includes('account') && sessionId != null) {
        requestCloned = request.clone({
          params: request.params.set('api_key', environment.apiKey).set('session_id', sessionId)
        });
    } else {
      requestCloned = request.clone({
        setParams: {
          api_key: environment.apiKey
        }
      });
    }
    return next.handle(requestCloned);
  }
}
