import Ember from 'ember';
import layout from '../templates/components/mdb-input-text';

export default Ember.Component.extend({
    layout,

    classNames: ["md-form"],
    sFieldName: "",
    sValue: "",
    _sInputId: null,
    init: function () {
        this._super(...arguments);
        this.set("_sInputId", Ember.guidFor({}));

        var objThis = this;

        Ember.run.scheduleOnce("afterRender", this, function () {
            var objTextInput = $("#" + objThis.get("_sInputId"));

            if (!a24.isEmpty(objThis.get("sValue"))) {
                objTextInput.change();
            }

            objTextInput.on("blur", function () {
                objThis.resetFloatingLabel(objTextInput);
            });
        });
    },
    resetFloatingLabel: function (objTextInput) {
        //If the input field has no value then the label should NOT have the active class and
        //float at placeholder position
        if (a24.isEmpty(objTextInput.val())) {
            this.$("label").removeClass("active");
        }
    }

});
