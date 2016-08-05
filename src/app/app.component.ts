import { Component } from '@angular/core';
import { MD_PROVIDERS } from './material.providers';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ MD_PROVIDERS ]
})
export class AppComponent {
  isAuth = false;
  authColor = 'warn';
  user = {};

  login() {
    this.isAuth = !this.isAuth;
    this.authColor = 'primary';
  }
  logout() {
    this.isAuth = !this.isAuth;
    this.authColor = 'warn';
  }
}
