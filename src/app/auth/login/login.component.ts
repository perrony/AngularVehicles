import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../guard/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  email = '';
  password = '';
  isLoading = false;


  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  onFormSubmit(): void {
    this.isLoading = true;
    this.authService.login(this.loginForm.value)
      .subscribe(() => {
        this.isLoading = false;
        this.router.navigate(['/secure']).then(_ => console.log('You are secure now!'));
      }, (err: any) => {
        this.toastr.error('Usuário ou senha inválida!', 'Tente novamente!')
        this.isLoading = false;
      });
  }

}
