import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

const APP_NAME = environment.APP_NAME;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  AppName = APP_NAME;

  constructor() { }

  ngOnInit(): void {
  }

}
