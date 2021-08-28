sap.ui.define(
	["sap/ui/core/UIComponent", "sap/base/Log", "sap/ui/model/json/JSONModel"],
	function (UIComponent, Log, JSONModel) {
		return UIComponent.extend("yelcho.demo.Component", {
			metadata: {
				manifest: "json",
			},

			init: function () {
				UIComponent.prototype.init.apply(this, arguments)
				Log.info(`Component "${this.getMetadata().getComponentName()}"`, "init")

				this.getRouter().initialize()

				this._setupMonstersModel()
			},
			_setupMonstersModel: function () {
				this.setModel(new JSONModel("./demo/model/monsters.json"))
			},
		})
	}
)
