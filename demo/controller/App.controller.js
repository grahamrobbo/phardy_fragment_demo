sap.ui.define(
	[
		"yelcho/demo/controller/BaseController",
		"sap/base/Log",
		"sap/ui/model/json/JSONModel",
	],
	function (Controller, Log, JSONModel) {
		return Controller.extend("yelcho.demo.controller.App", {
			onInit: function () {
				Log.info(`Controller "${this.getMetadata()._sClassName}"`, "onInit")
				this.getRouter().attachRouteMatched(this.onRouteMatched, this)
			},
			onRouteMatched: function () {
				Log.info(
					`Controller "${this.getMetadata()._sClassName}"`,
					"onRouteMatched"
				)
			},
			onExit: function () {
				this.getRouter().detachRouteMatched(this.onRouteMatched, this)
			},
		})
	}
)
