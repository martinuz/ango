"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Measurement_1 = require("../../model/Measurement");
var core_1 = require("@angular/core");
/**
 * Created by Kuba on 08.01.2017.
 */
var MeasurementSet = (function () {
    function MeasurementSet() {
        this.bloodMeasurements = [
            new Measurement_1.Measurement("ALT (alanine aminotransferase)", "", 32, { min: 8, max: 37 }, "IU/L"),
            new Measurement_1.Measurement("Albumin", "", 5.0, { min: 3.9, max: 5.0 }, "g/dL"),
            new Measurement_1.Measurement("Alkaline phosphatase", "", 102.11, { min: 44, max: 147 }, "IU/L"),
            new Measurement_1.Measurement("Bilirubin", "", 1.2, { min: 0.1, max: 1.9 }, "mg/dL"),
            new Measurement_1.Measurement("Potassium", "", 4.01, { min: 3.7, max: 5.2 }, "mEq/L"),
        ];
    }
    return MeasurementSet;
}());
MeasurementSet = __decorate([
    core_1.Component({
        selector: "measurement-set",
        templateUrl: "MeasurementSet/templates/MeasurementSet.html",
        styleUrls: []
    }),
    __metadata("design:paramtypes", [])
], MeasurementSet);
exports.MeasurementSet = MeasurementSet;
