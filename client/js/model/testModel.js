define(['backbone'], function(Backbone) {
    return Backbone.Model.extend({
    	defaults:{
            title:'defaut title'
        },
        validate:function() {
        },
        initialize:function(){
        },
        updateAll:function(parObj){
            this.set({
                title:parObj.title
            }, {silent:true});
            this.trigger('change');             //  trigger event only once
        }
    },{ // STATIC METHODS HERE
       ColorEnum:Object.freeze({
            GREEN:0,
            RED:1,
            BLUE:2
        }) 
    });
});