import {Router} from 'aurelia-router';

export class App {
  static inject() { return [Router]; }
  
  constructor(router) {
    this.router = router;
    this.router.configure( config => {
      config.map([
        { route: ['','dashboard'], moduleId: 'modules/dashboard/dashboard', nav: true, title: 'Dashboard', },
        { route: 'actions',  moduleId: 'modules/actions/actions', nav: true },
        { route: 'search',   moduleId: 'modules/search/search', nav: true },
        { route: 'segments', moduleId: 'modules/segments/segments', nav: true },
        { route: 'settings', moduleId: 'modules/settings/settings', nav: true },
        { route: 'tools',    moduleId: 'modules/tools/tools', nav: true }
      ]);
    });
  }

  canActivate() {
    if(!localStorage.getItem("token")) {
      this.router.navigate('login');
      return false;
    }
    return true;
  }
}