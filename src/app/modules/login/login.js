import AuthService from 'services/auth/AuthService';
import {Router} from 'aurelia-router';

export class Login {
  static inject() { return [Router]; }

  constructor(router) {
    this._router = router;
  }
  
  login() {
    AuthService.login('username', 'pass', ()=> {
      this._router.navigate('dashboard');
    });
  }
}