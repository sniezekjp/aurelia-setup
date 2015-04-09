import {LogManager} from 'aurelia-framework';
import {ConsoleAppender} from 'aurelia-logging-console';
import $ from 'jquery';

LogManager.addAppender(new ConsoleAppender());
LogManager.setLevel(LogManager.levels.info);

export function configure(aurelia) {
  aurelia.use
    .defaultBindingLanguage()
    .defaultResources()
    .router()
    .eventAggregator();

  aurelia.start().then(a => a.setRoot('main', document.body));
}