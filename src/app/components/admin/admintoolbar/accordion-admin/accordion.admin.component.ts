import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

const APP_NAME = environment.APP_NAME;

@Component({
  selector: 'app-accordion-admin',
  templateUrl: './accordion.admin.component.html',
  styleUrls: ['./accordion.admin.component.css']
})
export class AccordionAdminComponent implements OnInit {

  AppName = APP_NAME;
  
  constructor() { }

  ngOnInit(): void {
  }

}
