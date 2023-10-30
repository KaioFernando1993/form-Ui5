/*global QUnit*/

sap.ui.define([
	"formulario/controller/Fornecedor.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Fornecedor Controller");

	QUnit.test("I should test the Fornecedor controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
