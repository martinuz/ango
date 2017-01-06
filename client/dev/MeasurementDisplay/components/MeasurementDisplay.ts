import {Component, Input} from '@angular/core';
import {Measurement} from "../../model/Measurement";

@Component({
  selector: 'measurement-display',
  templateUrl: 'MeasurementDisplay/templates/MeasurementDisplay.html',
  styleUrls: ['MeasurementDisplay/styles/MeasurementDisplay.css']
})
export class MeasurementDisplay {
  @Input()
  value: Measurement;
}
