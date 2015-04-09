import {Redirect} from 'aurelia-router';

export default class AuthPipeline {
  run(context, next) {
    if(context.nextInstruction.fragment !== "login" && !localStorage.getItem("token")) {
      return next.cancel(new Redirect('login'));
    }
    return next();
  }
}