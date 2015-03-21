import {Router} from 'aurelia-router';
import AuthService from 'services/auth/AuthService';

export class Login {
  static inject() { return [Router]; }
  
  constructor(router) {
    this._router = router;
  }
  
  login() {
    AuthService.login('user', 'pass', ()=> {
      this._router.navigate('app');
    });
  }
}