require.config ({
    baseUrl:'js',
    paths:{
        jquery:'http://code.jquery.com/jquery-2.1.1.min',
        jqueryui:'http://code.jquery.com/ui/1.11.2/jquery-ui.min',
        underscore:'http://underscorejs.org/underscore-min',
        backbone:'http://backbonejs.org/backbone-min',
        text:'http://raw.githubusercontent.com/requirejs/text/latest/text',
        tpl:'../templates'
    },
    shim:{
        underscore:{
            exports:'_'
        },
        backbone:{
            deps:['underscore', 'jquery'],
            exports: 'Backbone'
        }
    }
});

require (['jquery', 'underscore', 'backbone', 'app/app'], function ($, _, Backbone, App) {
    $(function() {
        App.initialize();
    });
});