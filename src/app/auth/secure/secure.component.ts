import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../guard/auth.service';
import { TokenService } from '../token/token.service';


@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css']
})
export class SecureComponent implements OnInit {

  message = '';
  isLoadingResults = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    this.isLoadingResults = true;
    if(!this.tokenService.getRefreshToken()) {
      this.isLoadingResults = false;
      this.router.navigate(['/login'])
    }

    this.router.navigate(['/admin'])
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']).then(_ => console.log('Logout'));
  }

}
