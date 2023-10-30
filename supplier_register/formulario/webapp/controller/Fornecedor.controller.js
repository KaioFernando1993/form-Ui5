sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/mvc/Controller"
], function(JSONModel, Controller) {
    "use strict";

    return Controller.extend("formulario.controller.Fornecedor", {
        onInit: function() {
            var oJsonModel = new JSONModel({
                street: "",
                neighborhood: "",
                city: "",
                cellPhone: "",
                email: "",
                phoneNumber: "",
                Fax: "",
                number: "",
                zipCode: "",
                region: "",
                extensionOne: "",
                extensionTwo: "",
                supplier: [{
                    selected: false,
                    name: "",
                    cpf: ""
                }],

            });
            this.getView().setModel(oJsonModel, "ObjectModel");

        },
        onInsertSupplier: function() {
            var oView = this.getView();
            var oModel = oView.getModel("ObjectModel");
            var aNames = oModel.getProperty("/supplier");

            var aNames = oModel.getProperty("/supplier") || [];

            aNames.push({
                selected: false,
                name: "",
                cpf: ""
            });

            oModel.setProperty("/supplier", aNames);
        },
        onRemoveSupplier: function() {
            var oView = this.getView();
            var oModel = oView.getModel("ObjectModel");
            var aSupplier = oModel.getProperty("/supplier");

            var aNotToDelete = aSupplier.filter(function(supplier) {
                return !supplier.selected;
            });

            oModel.setProperty("/supplier", aNotToDelete);
        },
        onSave: function(oEvent) {
            var oModel = this.getView().getModel("ObjectModel").getData()
            console.log(oModel)
        }
    });

});