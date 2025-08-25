import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
