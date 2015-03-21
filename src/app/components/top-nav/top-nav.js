import {Behavior} from 'aurelia-framework';
import AuthService from 'services/auth/AuthService';

export class TopNav {
  static metadata() { return Behavior.withProperty('router'); }

  logout() {
    AuthService.logout(()=> {
      this.router.navigate('login');
    });
  }  
}