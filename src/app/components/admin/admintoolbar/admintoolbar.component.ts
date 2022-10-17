import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

const APP_NAME = environment.APP_NAME;
const API_URL = `${environment.API_URL}`;

interface IUser {
  id: number;
  name: string | null;
  lastname: string;
  email: string;
  cpf: string;
  token: string;

}

interface IUserResponse {
  data: IUser;
}

@Component({
  selector: 'app-admintoolbar',
  templateUrl: './admintoolbar.component.html',
  styleUrls: ['./admintoolbar.component.css']
})
export class AdmintoolbarComponent implements OnInit {

  AppName = APP_NAME;
  user!: IUser | null;

  constructor(
    private router: Router,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {

    const userEmail = localStorage.getItem('email');
    this.http.get<IUserResponse>(API_URL + 'api/register/user/' + userEmail)
      .subscribe(
        value => {
          localStorage.setItem('profile', JSON.stringify(value.data));
          this.user = value.data;
        }
      )
  }


  onLogout(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
