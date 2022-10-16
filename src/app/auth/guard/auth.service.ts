import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { TokenService } from 'src/app/auth/token/token.service';
import { environment } from 'src/environments/environment';


const OAUTH_CLIENT = 'express-client';
const OAUTH_SECRET = 'express-secret';
const API_URL = `${environment.API_URL}`

const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  redirectUrl = '';
  authClient: any = {
    email: null,
    password: null
  }


  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
  ) { }

  login(loginData: any): Observable<any> {

    this.tokenService.removeToken();
    this.tokenService.removeRefreshToken();

    return this.http.post<any>(API_URL + 'api/auth/login', loginData, { observe: 'response' })
      .pipe(
        tap(res => {
          this.tokenService.saveToken(res.body.token);
          this.tokenService.saveRefreshToken(res.body.token);
          this.tokenService.setUser(loginData.email);
        }),
        catchError(AuthService.handleError)
      );

  }

  refreshToken(refreshData: any): Observable<any> {
    this.tokenService.removeToken();
    this.tokenService.removeRefreshToken();
    const body = new HttpParams()
      .set('refresh_token', refreshData.refresh_token)
      .set('grant_type', 'refresh_token');
    return this.http.post<any>(API_URL + 'api/auth/login', body, HTTP_OPTIONS)
      .pipe(
        tap(res => {
          this.tokenService.saveToken(res.access_token);
          this.tokenService.saveRefreshToken(res.refresh_token);
        }),
        catchError(AuthService.handleError)
      );
  }


  logout(): void {
    this.tokenService.removeToken();
    this.tokenService.removeRefreshToken();
    /* this.loggedService.clearLogin(); */
  }

  register(data: any): Observable<any> {
    return this.http.post<any>(API_URL + 'api/auth/register', data)
      .pipe(
        tap(_ => AuthService.log('register')),
        catchError(AuthService.handleError)
      );
  }

  secured(): Observable<any> {
    return this.http.get<any>(API_URL)
      .pipe(catchError(AuthService.handleError));
  }

  private static handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      /*   AuthService.prototype.toastr.error("Ocorreu um erro", error.error.message) */
      console.error('An error occurred:', error.error.message);
    } else {
      /* AuthService.prototype.toastr.error(`Backend retornou um código ${error.status}`, `body was: ${error.error}`) */
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      console.error('Something bad happened; please try again later')
      /* AuthService.prototype.toastr.error('Something bad happened; please try again later') */
    )

  }

  private static log(message: string): any {
    console.log(message);
  }



}
