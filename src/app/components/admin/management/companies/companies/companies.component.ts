import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CompaniesService } from 'src/app/share/services/company/companies/companies.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})


export class CompaniesComponent implements OnInit {

  companyForm!: FormGroup; 
  active = 1;
  isLoading: boolean = false

  constructor(
    private formBuilder: FormBuilder,
    private companyService: CompaniesService,
    private toastr: ToastrService

  ) { }

  ngOnInit(): void {
    this.companyForm = this.formBuilder.group({
      id: [null],
      social_reason: [ null, [Validators.required, Validators.minLength(10),Validators.maxLength(255)]],
      fantasy_name: [ null, [Validators.required, Validators.minLength(10), Validators.maxLength(255)]],
      cnpj: [null, [Validators.required]],
      state_registration: [null, Validators.required],
      start_date: [null],
      web_site: [null],
      created_at: [null],
      updated_at: [null]
    });

    this.isLoading = true;
    this.companyService.loadCompany()
      .subscribe(
        response => {
           if(response.data) {
             return this.companyForm.setValue(response.data);
           }
        }
      ).add(() => {
        this.isLoading = false;
      }) 
   
  }

  onSubmit(): void {
    this.isLoading = true;
    this.companyService.save(this.companyForm.value).subscribe(
      response => {
        if(response.message){
          console.log(response.message);
          this.toastr.success(response.message);
        }
      }).add(() => {
        this.isLoading = false;
      })
  }


}
