import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthService} from "./services";

@Injectable()
export class MainInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const isAuthenticated = this.authService.isAuthorization();
    if (isAuthenticated) {
      request = this.addToken(request, this.authService.getToken())
    }
    return next.handle(request);
  }
  addToken(request:HttpRequest<any>, token:string):HttpRequest<any>{
    return request.clone({
      setHeaders:{Authorization: `Bearer ${token}`}
    })
  }
}
