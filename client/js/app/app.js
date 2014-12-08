define (['model/testModel', 'view/testView'], function (testModel, testView) {
    return {
        initialize: function () {
            var mdlTest = new testModel();
            var viewTest = new testView({model: mdlTest});
            setTimeout(function() {mdlTest.updateAll({title: 'toutou'});}, 1000);
        }
    };
});