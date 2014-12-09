define([
    'backbone',
    'model/equipment/itfItemMdl',
    'model/equipment/weaponMdl'],
    function(
        Backbone,
        ItemBase,
        Weapon){
   return Backbone.Collection.extend({
       model: function (pAttrs, pOptions) {
           switch (pAttrs.type) {
               case ItemBase.TypeEnum.Weapon:
                   return new Weapon(pAttrs, pOptions);
               default:
                   return new ItemBase(pAttrs, pOptions);
           }
       }
   });
});