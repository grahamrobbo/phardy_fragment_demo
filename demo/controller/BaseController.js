sap.ui.define(
	["sap/ui/core/mvc/Controller", "sap/base/Log"],
	// eslint-disable-next-line max-params
	function (Controller, Log) {
		return Controller.extend("yelcho.dp.reuse.BaseController", {
			myRouter: null,
			onInit: function () {
				Log.info(`Controller "${this.getMetadata()._sClassName}"`, "onInit")

				this.myRouter = this.getRouter()
			},
			onBeforeViewRendered: function () {},
			onAfterViewRendered: function () {},
			/**
			 * Convenience method for accessing the router in every controller of the application.
			 * @public
			 * @returns {sap.ui.core.routing.Router} the router for this component
			 */
			getRouter: function () {
				//this.getOwnerComponent().fireRefreshTimer()
				return this.getOwnerComponent().getRouter()
			},
			/**
			 * Convenience method for getting the view model by name in every controller of the application.
			 * @public
			 * @param {string} sName the model name
			 * @returns {sap.ui.model.Model} the model instance
			 */
			getModel: function (sName) {
				return this.getView().getModel(sName)
			},
			/**
			 * Convenience method for setting the view model in every controller of the application.
			 * @public
			 * @param {sap.ui.model.Model} oModel the model instance
			 * @param {string} sName the model name
			 * @returns {sap.ui.mvc.View} the view instance
			 */
			setModel: function (oModel, sName) {
				return this.getView().setModel(oModel, sName)
			},
		})
	}
)
