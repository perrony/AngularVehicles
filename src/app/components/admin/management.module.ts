import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementComponent } from './management.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';


import { AdmintoolbarComponent } from './admintoolbar/admintoolbar.component';
import { UsersComponent } from './settings/users/users.component';
import { RouterModule } from '@angular/router';
import { AccordionConfigComponent } from './admintoolbar/accordion-config/accordion.config.component';
import { AccordionManagementComponent } from './admintoolbar/accordion-management/accordion.management.component';
import { AccordionFinancialComponent } from './admintoolbar/accordion-financial/accordion.financial.component';
import { RulesComponent } from './settings/rules/rules.component';
import { CompaniesComponent } from './management/companies/companies/companies.component';
import { PeopleComponent } from './management/people/people.component';
import { VehicleregistrationComponent } from './management/vehicleregistration/vehicleregistration.component';
import { StockvehiclesComponent } from './management/stockvehicles/stockvehicles.component';
import { OptionalvehiclesComponent } from './management/optionalvehicles/optionalvehicles.component';
import { VehiclecolorsComponent } from './management/vehiclecolors/vehiclecolors.component';
import { FipetableComponent } from './management/fipetable/fipetable.component';
import { HistoryoperationsComponent } from './financial/historyoperations/historyoperations.component';
import { PaymentmethodComponent } from './financial/paymentmethod/paymentmethod.component';
import { BillstoreceiveComponent } from './financial/billstoreceive/billstoreceive.component';
import { BillstopayComponent } from './financial/billstopay/billstopay.component';
import { InstitutionsComponent } from './financial/institutions/institutions.component';
import { BanksComponent } from './financial/banks/banks.component';
import { AddressCompanyComponent } from './management/companies/address-company/address-company.component';
import { FormAddressComponent } from './management/companies/address-company/form-address/form-address.component';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { RegisterComponent } from 'src/app/auth/register/register.component';
import { ProfileComponent } from './settings/profile/profile.component';

@NgModule({
  declarations: [
    ManagementComponent,
    AdmintoolbarComponent,
    AccordionConfigComponent,
    AccordionManagementComponent,
    AccordionFinancialComponent,
    UsersComponent,
    RulesComponent,
    CompaniesComponent,
    PeopleComponent,
    VehicleregistrationComponent,
    StockvehiclesComponent,
    OptionalvehiclesComponent,
    VehiclecolorsComponent,
    FipetableComponent,
    HistoryoperationsComponent,
    PaymentmethodComponent,
    BillstoreceiveComponent,
    BillstopayComponent,
    InstitutionsComponent,
    BanksComponent,
    AddressCompanyComponent,
    FormAddressComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,


  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatExpansionModule,
    MatIconModule,
    MatToolbarModule,
    RouterModule,
    MatFormFieldModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatInputModule,
    MatBottomSheetModule,
    MatBadgeModule,
    MatButtonModule,
    HttpClientModule,
    MatProgressBarModule,
    NgxSkeletonLoaderModule,
    MatDialogModule,
    MatMenuModule



  ]
})
export class ManagementModule { }
