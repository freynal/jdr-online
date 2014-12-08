require.config ({
    baseUrl:'js',
    paths:{
        jquery:'//code.jquery.com/jquery-2.1.1.min.js',
        jqueryui:'//code.jquery.com/ui/1.11.2/jquery-ui.min.js'
        underscore:'//underscorejs.org/underscore-min.js',
        backbone:'//backbonejs.org/backbone-min.js',
        text:'//raw.githubusercontent.com/requirejs/text/latest/text.js',
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

require (['jquery', 'underscore', 'backbone' 'app'], function ($, _, Backbone, App) {
    $(function() {
        App.initialize();
    });
});