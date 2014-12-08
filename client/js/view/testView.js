define(['jquery', 'underscore','backbone','text!tpl/test.tpl'], function($, _, Backbone, tpl) {
    return Backbone.View.extend ({
        tagName:"div",
        el:"#test",
        template:_.template(tpl),
        events:{
            
        },
        initialize:function() {
            this.listenTo(this.model, 'change', this.render);
            this.render();
        },
        render:function(){
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });
});