import AuthService from 'services/auth/AuthService';
import {Router} from 'aurelia-router';

export class Dashboard {
  
  static inject() { return [Router]; }

  constructor(router) {
    this._router = router;
  }

  logout() {
    AuthService.logout(()=> {
      this._router.navigate('login');
    });
  }
}