(function (app) {
    app.component('appLead', {
        templateUrl: './Page_Templates/AppLead_Page/appLead.html',
        controller: function AppLeadController(AppLeadUrl, httpService) {
            
            var ctrl = this;
            //ctrl.selectedID = '';
            ctrl.selectedForm = '';
            ctrl.rawData = {};
            ctrl.vulRawData = {};
            ctrl.rawAssocVulData = {};
            ctrl.saveButton = 1;
            ctrl.vulnerabilityLists = {};

            ctrl.businessGroupLists = {};

           
        },
        controllerAs: 'AppLeadCtrl'
    });
}(angular.module('app')));
