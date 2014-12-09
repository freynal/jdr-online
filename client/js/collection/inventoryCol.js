define([
    'backbone',
    'model/equipment/itfItemMdl',
    'model/equipment/weaponMdl'],
    function(
        Backbone,
        BaseItem,
        Weapon){
   return Backbone.Collection.extend({
       model: function (pAttrs, pOptions) {
           switch (pAttrs.type) {
               case BaseItem.TypeEnum.Weapon:
                   return new Weapon(pAttrs, pOptions);
               default:
                   return new BaseItem(pAttrs, pOptions);
           }
       }
   });
});