import {Router} from 'aurelia-router';
import AuthPipeline from 'services/auth/AuthPipeline';

export class Main {
  
  static inject() { return [Router]; }
  
  constructor(router) {
    this.router = router;
    
    this.router.configure(config => {
      
      config.addPipelineStep('authorize', AuthPipeline);
      
      config.title = 'App';
      
      config.map([
        { route: '', redirect: 'app' }
      ]);

      config.mapUnknownRoutes((instruction)=> {
        instruction.fragment = instruction.fragment || 'dashboard';
        if(instruction.fragment.indexOf('app') !== -1) {
          instruction.config.moduleId = `modules/${instruction.fragment}/${instruction.fragment}`;
        }
      });
    });
  }
}