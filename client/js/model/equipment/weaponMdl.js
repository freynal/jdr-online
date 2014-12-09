define(['backbone', 'model/equipment/itfItemMdl'], function(Backbone, BaseItem){
   return BaseItem.extend({
       defaults:{
           type:BaseItem.TypeEnum.Weapon
       }
   });
});