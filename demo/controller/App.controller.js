sap.ui.define(
	["yelcho/demo/controller/BaseController", "sap/base/Log"],
	function (Controller, Log, JSONModel) {
		return Controller.extend("yelcho.demo.controller.App", {
			onInit: function () {
				Controller.prototype.onInit.apply(this, arguments)
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
