import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

const APP_NAME = environment.APP_NAME;

@Component({
  selector: 'app-hometoolbar',
  templateUrl: './hometoolbar.component.html',
  styleUrls: ['./hometoolbar.component.css']
})
export class HometoolbarComponent implements OnInit {

  AppName = APP_NAME;
  
  constructor() { }

  ngOnInit(): void {
  }

}
