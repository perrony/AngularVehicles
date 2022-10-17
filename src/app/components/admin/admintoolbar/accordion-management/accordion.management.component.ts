import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

const APP_NAME = environment.APP_NAME;

@Component({
  selector: 'app-accordion-management',
  templateUrl: './accordion.management.component.html',
  styleUrls: ['./accordion.management.component.css']
})
export class AccordionManagementComponent implements OnInit {

  AppName = APP_NAME;
  
  constructor() { }

  ngOnInit(): void {
  }

}
