define([
    'jquery',
    'backbone',
    'mainpage'
    ], function(
        $,
        Backbone,
        mainpageModule
    ) {
    vent = _.extend({}, Backbone.Events);
    var App = Backbone.Router.extend({
        routes: {
            '': 'index',
            'about': 'about',
            'price': 'price',
            'gallery': 'gallery',
            'gallry/:id': 'gallry',
            'about_us': 'about_us',
            'services': 'services',
            'map': 'map'
        },

        initialize: function() {

        },

        index: function() {
            console.log('index');
        },

        about: function() {
            console.log('about');
        },

        price: function() {
            console.log('price');
        },

        gallery: function(id) {
            console.log('gallery');
        },

        about_us: function() {
            console.log('about_us');
        },

        services: function() {
            console.log('services');
        },

        map: function() {
            console.log('map');
        },
    });

    return new App;

});
