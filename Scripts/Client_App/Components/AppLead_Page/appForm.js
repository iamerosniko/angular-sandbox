(function (app) {
    app.component('appForm', {
        templateUrl: './Page_Templates/AppLead_Page/appForm.html',
        controller: function AppFormController(AppLeadUrl, httpService, $scope) {
            var ctrl = this;
            
        },
        controllerAs: 'AppFormCtrl',
        bindings: {
            rawDataAppForm: '<',
            businessGroupListsAppForm: '<',
            applicationListsAppForm: '=',
            navDataVul: '='
        }
    });
}(angular.module('app')));