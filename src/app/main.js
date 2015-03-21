import {Router} from 'aurelia-router';

export class Main {
  
  static inject() { return [Router]; }
  
  constructor(router) {
    this.router = router;
    this.router.configure(config => {
      config.title = 'Aurelia';
      config.map([
        { route: ['app'], moduleId: 'modules/app/app', nav: true },
        { route: 'login', moduleId: 'modules/login/login', nav: true },
        { route: '', redirect: 'app' }
      ]);
    });
  }
}