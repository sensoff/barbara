(function() {
  require.config({
    paths: {
      backbone: '../bower_components/backbone/backbone',
      fotorama: '../bower_components/fotorama/fotorama',
      jquery: '../bower_components/jquery/jquery',
      underscore: '../bower_components/underscore/underscore'
    },
    shim: {
      underscore: {
        exports: '_'
      },
      backbone: {
        deps: ['underscore', 'jquery'],
        exports: 'Backbone'
      },
      fotorama: {
        deps: ['jquery'],
        exports: 'fotorama'
      }
    }
  });

  require(['backbone', 'app'], function(Backbone, app) {
    Backbone.history.start();
    _.extend({}, Backbone.Events);
  });

})();
