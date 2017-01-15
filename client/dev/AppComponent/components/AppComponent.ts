import {Component} from '@angular/core';
import {Measurement} from "../../model/Measurement";
import {MeasurementSet} from "../../MeasurementSet/components/MeasurementSet";

@Component({
  selector: 'app-component',
  templateUrl: 'AppComponent/templates/AppComponent.html',
  styleUrls: ['AppComponent/styles/AppComponent.css']
})
export class AppComponent {
  name: string = `yo, I'm your component :D`;
  measurementSet: MeasurementSet = new MeasurementSet();
}
