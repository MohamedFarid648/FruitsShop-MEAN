import { LocalStorageService } from './../Services/local-storage.service';

import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor( private localStorageService: LocalStorageService) {

    }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        const currentUser = this.localStorageService.readObject('UserInfo');

        if (currentUser ){ // && currentUser.token) {
            request = request.clone({
                setHeaders: { 
                    Authorization: '123456'// `Bearer ${currentUser.token}`
                }
            });
        }

        return next.handle(request);
    }
}