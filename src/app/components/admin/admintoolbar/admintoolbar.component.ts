import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

const APP_NAME = environment.APP_NAME;

@Component({
  selector: 'app-admintoolbar',
  templateUrl: './admintoolbar.component.html',
  styleUrls: ['./admintoolbar.component.css']
})
export class AdmintoolbarComponent implements OnInit {

  AppName = APP_NAME;
  
  constructor() { }

  ngOnInit(): void {
  }

}
