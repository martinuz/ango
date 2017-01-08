import {Measurement} from "../../model/Measurement";
import {Component} from "@angular/core";
/**
 * Created by Kuba on 08.01.2017.
 */

@Component({
  selector:"measurement-set",
  templateUrl:"MeasurementSet/templates/MeasurementSet.html",
  styleUrls: []
})
export class MeasurementSet {
  bloodMeasurements: Measurement[] = [
    new Measurement("ALT (alanine aminotransferase)", "", 32, {min: 8, max: 37}, "IU/L"),
    new Measurement("Albumin", "", 5.0, {min:3.9, max:5.0}, "g/dL"),
    new Measurement("Alkaline phosphatase", "", 102.11, {min:44, max:147}, "IU/L"),
    new Measurement("Bilirubin", "", 1.2, {min:0.1, max:1.9}, "mg/dL"),
    new Measurement("Potassium", "", 4.01, {min:3.7, max:5.2}, "mEq/L"),
  ];
}
