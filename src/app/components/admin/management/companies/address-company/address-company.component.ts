import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IAddressCompanies } from 'src/app/share/models/companies/AddressCompanies';
import { AddressCompanyService } from 'src/app/share/services/company/address/AddressCompany.service';
import { FormAddressComponent } from './form-address/form-address.component';

@Component({
  selector: 'app-address-company',
  templateUrl: './address-company.component.html',
  styleUrls: ['./address-company.component.css']
})
export class AddressCompanyComponent implements OnInit {

  isLoading: boolean = false;
  addressCompany: IAddressCompanies[] = [];
  @Input() company!: number;

  constructor(
    private addressCompanyService: AddressCompanyService,
    private toastr: ToastrService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
     this.isLoading = true;
     this.addressCompanyService.getAddressCompany(this.company)
     .subscribe(
      response => {
        if(response.data) {
            this.addressCompany = response.data;
        }
      }
     ).add(() => {
      this.isLoading = false
     })
  }

  openForm(item: IAddressCompanies | null){
  
    const dialogRef = this.dialog.open(FormAddressComponent, {
      data: { empresa: this.company, item: item }
    });
       dialogRef.afterClosed().subscribe(result => {
          if(result.event){
            /*  this.updateEnderecos(result.event) */
          }
       }) 
   }

   onDelete(item: IAddressCompanies){
     console.log(item);
   }
}
