import { RegisterService } from 'src/app/share/services/register/register.service';
import { FormValidations } from 'src/app/share/forms/form-validator/form-validator.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IUsers } from 'src/app/share/models/global/Users';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  imageUpload!: string;
  formProfile!: FormGroup
  user!: IUsers;
event: any;
  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService,
  ) { }

  ngOnInit(): void {
    this.imageUpload = '../../../../assets/images/addPhoto.svg';
    const localUser = localStorage.getItem('profile');
    if(localUser) {
      this.user = JSON.parse(localUser);
    }
    this.formProfile = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      lastname: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      cpf: [null, FormValidations.cpfValidator],
      email: [null],
      oldPassword: [null, [Validators.required, Validators.minLength(6)]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      confirmPassword: [null, [Validators.required, Validators.minLength(6), FormValidations.equalsTo('password')]],
    });

    this.formProfile.setValue({
      name: this.user.name,
      lastname: this.user.lastname,
      cpf: this.user.cpf,
      email: this.user.email,
      oldPassword: null,
      password: null,
      confirmPassword: null
    });

  }


  onFormSubmit() {

  }

  dropHandler(event: any) {
    console.log(event)
  }
}
