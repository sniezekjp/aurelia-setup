System.config({
  "map": {
    "aurelia-bootstrapper": "vendor/aurelia-bootstrapper/dist/amd/index",
    "aurelia-loader": "vendor/aurelia-loader/dist/amd/index",
    "aurelia-loader-default": "vendor/aurelia-loader-default/dist/amd/index",
    "aurelia-framework": "vendor/aurelia-framework/dist/amd/index",
    "aurelia-logging-console": "vendor/aurelia-logging-console/dist/amd/index",
    "aurelia-logging": "vendor/aurelia-logging/dist/amd/index",
    "aurelia-metadata": "vendor/aurelia-metadata/dist/amd/index",
    "aurelia-path": "vendor/aurelia-path/dist/amd/index",
    "aurelia-dependency-injection": "vendor/aurelia-dependency-injection/dist/amd/index",
    "aurelia-binding": "vendor/aurelia-binding/dist/amd/index",
    "aurelia-event-aggregator": "vendor/aurelia-event-aggregator/dist/amd/index",
    "aurelia-router": "vendor/aurelia-router/dist/amd/index",
    "aurelia-route-recognizer": "vendor/aurelia-route-recognizer/dist/amd/index",
    "aurelia-history": "vendor/aurelia-history/dist/amd/index",
    "aurelia-history-browser": "vendor/aurelia-history-browser/dist/amd/index",
    "aurelia-templating": "vendor/aurelia-templating/dist/amd/index",
    "aurelia-templating-binding": "vendor/aurelia-templating-binding/dist/amd/index",
    "aurelia-templating-resources": "vendor/aurelia-templating-resources/dist/amd/index",
    "aurelia-templating-router": "vendor/aurelia-templating-router/dist/amd/index",
    "aurelia-task-queue": "vendor/aurelia-task-queue/dist/amd/index",
    "aurelia-http-client": "vendor/aurelia-http-client/dist/amd/index",
    "core-js": "vendor/core-js/index",
    "bluebird": "vendor/bluebird/js/browser/bluebird",
    "jquery": "vendor/jquery/dist/jquery",
    "main": "./app/main",
    "bootstrap": "./app/bootstrap",
    "modules": './app/modules',
    "components": './app/components',
    "services": "./app/services"
  }
});

System.import('aurelia-bootstrapper');