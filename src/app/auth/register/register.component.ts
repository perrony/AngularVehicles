import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormValidations } from 'src/app/share/forms/form-validator/form-validator.component';
import { RegisterService } from 'src/app/share/services/register/register.service';
import { AuthService } from '../guard/auth.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  isLoading: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private registerService: RegisterService,
    private toastr: ToastrService

  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      lastName: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      cpf: [null, FormValidations.cpfValidator],
      email: [null, [Validators.required, Validators.email], this.validEmail.bind(this)],
      password: [null, [Validators.required, Validators.minLength(6)]],
      confirmPassword: [null, [Validators.required, Validators.minLength(6), FormValidations.equalsTo('password')]],
    });
  }

  onFormSubmit(): void {
    this.isLoading = true;
    this.authService.register(this.registerForm.value)
      .subscribe((res: any) => {
        this.isLoading = false;
        this.router.navigate(['/login']).then(() => {
          this.toastr.success('Registro efetuado com sucesso!')
        });

      }, (err: any) => {
        this.isLoading = false;
        this.toastr.error('Houve um erro ao efetuar seu registro')
      });
  }


  validEmail(control: FormControl) {
    return this.registerService.findEmail(control.value);
  }

  viewForm() {
    console.log(this.registerForm.value, this.registerForm.valid)
  }

}
