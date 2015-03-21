import {Router} from 'aurelia-router';

export class Tools {
  static inject() { return [Router]; }

  constructor(router) {
    this.router = router;
    this.router.configure(config=> {
      config.title = "Tools";
      config.map([
        { route: ['','form'], moduleId:'modules/tools/form/form', nav: true, title: 'Form' },
        { route: 'survey', moduleId:'modules/tools/survey/survey', nav: true },
        { route: 'quiz', moduleId:'modules/tools/quiz/quiz', nav: true }
      ]);
    });
  }
}