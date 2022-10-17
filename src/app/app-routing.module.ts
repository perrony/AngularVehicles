import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementComponent } from './components/admin/management.component';
import { CompaniesComponent } from './components/admin/management/companies/companies/companies.component';
import { FipetableComponent } from './components/admin/management/fipetable/fipetable.component';
import { OptionalvehiclesComponent } from './components/admin/management/optionalvehicles/optionalvehicles.component';
import { PeopleComponent } from './components/admin/management/people/people.component';
import { StockvehiclesComponent } from './components/admin/management/stockvehicles/stockvehicles.component';
import { VehiclecolorsComponent } from './components/admin/management/vehiclecolors/vehiclecolors.component';
import { VehicleregistrationComponent } from './components/admin/management/vehicleregistration/vehicleregistration.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { BanksComponent } from './components/admin/financial/banks/banks.component';
import { BillstopayComponent } from './components/admin/financial/billstopay/billstopay.component';
import { BillstoreceiveComponent } from './components/admin/financial/billstoreceive/billstoreceive.component';
import { HistoryoperationsComponent } from './components/admin/financial/historyoperations/historyoperations.component';
import { InstitutionsComponent } from './components/admin/financial/institutions/institutions.component';
import { PaymentmethodComponent } from './components/admin/financial/paymentmethod/paymentmethod.component';
import { RulesComponent } from './components/admin/settings/rules/rules.component';
import { UsersComponent } from './components/admin/settings/users/users.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { SecureComponent } from './auth/secure/secure.component';
import { AuthGuard } from './auth/guard/auth.guard';
import { ProfileComponent } from './components/admin/settings/profile/profile.component';


const routes: Routes = [

  { path: 'home', component: HomeComponent },

  {
    path: 'admin', canActivate: [AuthGuard], component: ManagementComponent, children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'company', component: CompaniesComponent },
      { path: 'people', component: PeopleComponent },
      { path: 'vehicleregistration', component: VehicleregistrationComponent },
      { path: 'stockvehicles', component: StockvehiclesComponent },
      { path: 'optionalvehicles', component: OptionalvehiclesComponent },
      { path: 'vehiclecolors', component: VehiclecolorsComponent },
      { path: 'fipetable', component: FipetableComponent },
      { path: 'historyoperations', component: HistoryoperationsComponent },
      { path: 'paymentmethod', component: PaymentmethodComponent },
      { path: 'billstoreceive', component: BillstoreceiveComponent },
      { path: 'billstopay', component: BillstopayComponent },
      { path: 'institutions', component: InstitutionsComponent, },
      { path: 'banks', component: BanksComponent },
      { path: 'users', component: UsersComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'rules', component: RulesComponent }
    ]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'secure', canActivate: [AuthGuard], component: SecureComponent }


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
