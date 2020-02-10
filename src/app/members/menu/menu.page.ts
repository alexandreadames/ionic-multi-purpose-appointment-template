import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  constructor(private authService: AuthenticationService) {}
  currentUser: any;
  showMenu: boolean = false;

  ngOnInit() {
    /*this.authService.getCurrentUser().then(user => {
      this.currentUser = user;
      this.showMenu = true;
    });*/
  }

  logout() {
    this.authService.logout();
  }
}
