"use strict";
/**
 * Created by Kuba on 04.01.2017.
 */
var Measurement = (function () {
    function Measurement(name, type, value, normalValue, unit) {
        this.name = name;
        this.type = type;
        this.value = value;
        this.normalValue = normalValue;
        this.unit = unit;
    }
    return Measurement;
}());
exports.Measurement = Measurement;
