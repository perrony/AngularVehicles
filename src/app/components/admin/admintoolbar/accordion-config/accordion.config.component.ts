import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

const APP_NAME = environment.APP_NAME;

@Component({
  selector: 'app-accordion-config',
  templateUrl: './accordion.config.component.html',
  styleUrls: ['./accordion.config.component.css']
})
export class AccordionConfigComponent implements OnInit {

  AppName = APP_NAME;
  
  constructor() { }

  ngOnInit(): void {
  }

}
