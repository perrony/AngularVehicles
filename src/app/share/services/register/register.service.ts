import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const URL = `${environment.API_URL}api/register`

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private http: HttpClient
  ) { }

  findEmail(email: string){
    console.log(`${URL}/email/${email}`)
    return this.http.get(`${URL}/email/${email}`)
      .pipe(
        map(response => console.log(response))
      )
  }
}
