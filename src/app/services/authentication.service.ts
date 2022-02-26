import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {
  userAPIUrl: string = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http
      .get<any>(`${this.userAPIUrl}?username=${username}&mode=auth`)
      .pipe(
        map((users) => {
          console.log('user details::' + users[0].firstName);
          let user: User = users[0];
          // login successful if there's a jwt token in the response
          if (user && user.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
          }

          return user;
        })
      );
  }

  getCurrentUserInfo(): any {
    let user = localStorage.getItem('currentUser');
    return user;
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
