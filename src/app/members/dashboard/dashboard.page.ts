import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
 
  constructor(private authService: AuthenticationService) { }
 
  ngOnInit() {
  }
 
  logout() {
    this.authService.logout();
  }
}