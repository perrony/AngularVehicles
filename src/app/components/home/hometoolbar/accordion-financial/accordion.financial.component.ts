import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

const APP_NAME = environment.APP_NAME;

@Component({
  selector: 'app-accordion-financial',
  templateUrl: './accordion.financial.component.html',
  styleUrls: ['./accordion.financial.component.css']
})
export class AccordionFinancialComponent implements OnInit {

  AppName = APP_NAME;
  
  constructor() { }

  ngOnInit(): void {
  }

}
