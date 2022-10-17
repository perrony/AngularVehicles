import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { TokenService } from '../token/token.service';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private tokenService: TokenService,
    private authService: AuthService,
    private toastr: ToastrService
    ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): any {
    const token = this.tokenService.getToken();
    const refreshToken = this.tokenService.getRefreshToken();

    if (token) {

      request = request.clone({
        setHeaders: {
          'authorization': token
        }
      });
    }

    if (!request.headers.has('Content-Type')) {
      request = request.clone({
        setHeaders: {
          'content-type': 'application/json'
        }
      });
    }

    request = request.clone({
      headers: request.headers.set('Accept', 'application/json')
    });


    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('event--->>>', event);
        }

        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        this.toastr.error(error.message,error.statusText)
        if (error.status === 401) {
          if (error.error.error === 'invalid_token') {
            this.authService.refreshToken({refresh_token: refreshToken})
              .subscribe(() => {
                location.reload();
              });
          } else {
            this.authService.logout()
            this.router.navigate(['/login']).then(_ => console.log('redirect to login'));
          }
        }
        return throwError(error);
      }));



  }

}
