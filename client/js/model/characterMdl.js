define(['backbone'], function(Backbone){
   return Backbone.Model.extend({
       defaults:{
           //--------------
           //   GLOBAL
           //--------------
           _name:'Unknown',
           _race:'Unknown',
           _class:'Unknown',
           _sign:'Unknown',
           _level:0,
           _inventory:null,
           //--------------
           //  ATTRIBUTES
           //--------------
           _attAdvantage:'None',
           _attDisadvantage:'None',
           //--------------
           //   STATS
           //--------------
           // Force = +B -S
           // Vie = +W
           // Def = +B +Va
           // Magie = -B +S
           // Dex = +Vi
           // Agi = +V -Va
           _stBestiality:0,
           _stWillPower:0,
           _stSneaky:0,
           _stSoul:0,
           _stValiant:0,
           _st:0,
           //
           _stVitality:0,
           _stStrengh:0,
           _stDefense:0,
           _stDexterity:0,
           _stAgility:0,
           _stWisdom:0
       },
       initialize:function(){
           
       },
       validate:function(){
           
       },
       updateAll:function(pObj){
           
       }
   });
});