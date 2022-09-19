import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';


import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';


import { AdmintoolbarComponent } from './admintoolbar/admintoolbar.component';
import { UserComponent } from './user/user.component';
import { RouterModule } from '@angular/router';
import { AccordionConfigComponent } from './admintoolbar/accordion-config/accordion.config.component';
import { AccordionAdminComponent } from './admintoolbar/accordion-admin/accordion.admin.component';
import { AccordionFinancialComponent } from './admintoolbar/accordion-financial/accordion.financial.component';

@NgModule({
  declarations: [
    AdminComponent,
    AdmintoolbarComponent,
    AccordionConfigComponent,
    AccordionAdminComponent,
    AccordionFinancialComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatExpansionModule,
    MatIconModule,
    MatToolbarModule,
    RouterModule

   
  ]
})
export class AdminModule { }
