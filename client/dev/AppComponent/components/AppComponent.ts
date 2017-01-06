import {Component} from '@angular/core';
import {Measurement} from "../../model/Measurement";

@Component({
  selector: 'app-component',
  templateUrl: 'AppComponent/templates/AppComponent.html',
  styleUrls: ['AppComponent/styles/AppComponent.css']
})
export class AppComponent {
  name: string = `yo, I'm your component :D`;
  bloodMeasurement: Measurement = new Measurement();
}
