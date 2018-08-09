import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }

  signIn(path:string,email:string,password:string):Observable<object>{
      return this.httpClient.post(path,{email:email,password:password});
  }
}
