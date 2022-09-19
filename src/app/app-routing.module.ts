import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { UserComponent } from './components/admin/user/user.component';


const routes: Routes = [

  { path: '', redirectTo: '/admin', pathMatch: 'full'},
  { path: 'admin', component: AdminComponent, children: [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'users', component: UserComponent}
  ]},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
