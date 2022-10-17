import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IUsers } from 'src/app/share/models/global/Users';
import { AddressCompanyService } from 'src/app/share/services/company/address/AddressCompany.service';
import { SearchCepService } from 'src/app/share/services/global/searchcep.service';

@Component({
  selector: 'app-form-address',
  templateUrl: './form-address.component.html',
  styleUrls: ['./form-address.component.css']
})
export class FormAddressComponent implements OnInit {

  isLoading: boolean = false;
  users: IUsers = {
    id: 1,
    name: 'Ladislau Scheffer Perrony',
    email: 'perrony.ls@gmail.com'
  }

  formAddress!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private cepService: SearchCepService,
    private addressService: AddressCompanyService,
    public dialogRef: MatDialogRef<FormAddressComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.formAddress = this.formBuilder.group({
      id: [null],
      description: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(150)]],
      complement: [null, Validators.maxLength(200)],
      number: [null, Validators.maxLength(10)],
      unity: [null],
      ibge: [null],
      gia: [null],
      cep: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      publicplace: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(200)]],
      district: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(150)]],
      locality: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(150)]],
      uf: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(2)]],
      siafi: [null],
      company_id: [this.data.empresa, [Validators.required]],
      user_id: [this.users.id, [Validators.required]],
    });

    if (this.data.item) {
      let ender = this.data.item
      this.formAddress.setValue({
        id: ender.id,
        descricao: ender.descricao,
        complemento: ender.complemento,
        numero: ender.numero,
        unidade: ender.unidade,
        ibge: ender.ibge,
        gia: ender.gia,
        cep: ender.cep,
        logradouro: ender.logradouro,
        bairro: ender.bairro,
        localidade: ender.localidade,
        uf: ender.uf,
        siafi: ender.siafi,
        empresa: ender.empresas_id,
        users: ender.user_id,
      })

    }
  }


  onSubmit() {
    if (this.formAddress.valid) {
      this.addressService.save(this.formAddress.value).subscribe(
        response => {
          if (response['data']) {
            this.dialogRef.close({
              event: response['data']
            })
          }
        }
      )
    }

  }



  findCep() {
    this.isLoading = true
    let cep = this.formAddress.get('cep')?.value
    if (cep) {
      this.cepService.searchCEP(cep)?.subscribe(
        response => {
          if (response.data) {
            const { data } = response;
            this.formAddress.get('ibge')?.setValue(data.ibge);
            this.formAddress.get('gia')?.setValue(data.gia)
            this.formAddress.get('publicplace')?.setValue(data.publicplace)
            this.formAddress.get('district')?.setValue(data.district)
            this.formAddress.get('locality')?.setValue(data.locality)
            this.formAddress.get('uf')?.setValue(data.uf)
            this.formAddress.get('siafi')?.setValue(data.siafi)
          }
        }
      ).add(() => {
        this.isLoading = false;
      }
      )
    }
  }



}
