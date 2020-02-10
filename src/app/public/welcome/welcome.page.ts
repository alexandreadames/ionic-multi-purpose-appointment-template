import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  isAuthenticated: boolean;

  constructor() {}

  ngOnInit() {
    this.isAuthenticated = false;
  }
}
