sap.ui.define(
	[
		"yelcho/demo/controller/BaseController",
		"sap/base/Log",
		"sap/ui/core/Fragment",
	],
	function (Controller, Log, Fragment) {
		return Controller.extend("yelcho.demo.controller.View", {
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
			onMonsterPressed: function (oEvent) {
				const oItem = oEvent.getParameter("item")
				const oView = this.getView()
				Log.info(`onMonsterPressed`, oItem.getText())

				if (!this._monsterDetailDialog)
					this._monsterDetailDialog = Fragment.load({
						name: "yelcho.demo.fragments.monsterDetailDialog",
						controller: this,
					}).then((oDialog) => {
						Log.info(`monsterDetailDialog`, `Instantiated`)
						return new Promise((resolve, reject) => {
							oView.addDependent(oDialog)
							resolve(oDialog)
						})
					})

				this._monsterDetailDialog.then((oDialog) => {
					Log.info(
						`monsterDetailDialog`,
						`Binding to ${oItem.getBindingContext().getPath()}`
					)
					oDialog.bindElement({
						path: oItem.getBindingContext().getPath(),
					})
					oDialog.open()
				})
			},
			onDialogClose: function () {
				this._monsterDetailDialog.then((oDialog) => {
					oDialog.close()
				})
			},
		})
	}
)
