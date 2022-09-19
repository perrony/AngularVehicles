import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

const APP_NAME = environment.APP_NAME;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  AppName = APP_NAME;

  constructor() { }

  ngOnInit(): void {
  }

}
