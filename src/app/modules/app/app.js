import {Router} from 'aurelia-router';

export class App {
  static inject() { return [Router]; }

  constructor(router) {
    this.router = router;
    this.router.configure(config=> {
      config.map([
        { route: ['','dashboard'], moduleId: 'modules/dashboard/dashboard' }
      ]); 
    });
  }
}