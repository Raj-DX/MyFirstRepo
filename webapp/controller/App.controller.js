sap.ui.define([
    'dxc/fin/ar/rajvansh01/controller/BaseController'
], function(BaseController) {
    'use strict';
    return BaseController.extend("dxc.fin.ar.rajvansh01.controller.App",{
        onInit: function(){
            console.log("Hey folks!! the App Controller is ready Now");
        }
    });
});