import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let obj = JSON.parse(<string>localStorage.getItem('token'));

    if (obj != null) {
      req = req.clone({
        setHeaders: { Authorization: obj.value },
      });
    } else {
      if (req.url != 'login') {
        this.router.navigate(['login']);
      }
    }
    return next.handle(req);
  }
}
