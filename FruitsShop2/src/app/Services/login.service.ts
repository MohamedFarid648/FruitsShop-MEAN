import { LocalStorageService } from './local-storage.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl = '';

  constructor(private httpClient: HttpClient, private localStorageService: LocalStorageService) {
    const userLocalStorage = localStorageService.readObject('UserInfo');
    

    if (userLocalStorage) {
      this.isLoggedIn = true;
    }
  }

  signIn(path: string, email: string, password: string) { // : Observable<object> {
    return this.httpClient.post(path, { email: email, password: password })
      .pipe(map(data => {
        console.log('data from pipe map');
        console.log(data);

        if (!data['ErrorFromServer']) {
          this.isLoggedIn = true;
          this.localStorageService.writeObject('UserInfo', data);
        }

      }));


  }

  logout() {
    this.isLoggedIn = false;
    localStorage.removeItem('MyUser');

  }
}
