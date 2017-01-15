import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule, FormBuilder} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './AppComponent/components/AppComponent';
import {MeasurementDisplay} from "./MeasurementDisplay/components/MeasurementDisplay";
import {MeasurementSet} from "./MeasurementSet/components/MeasurementSet";

@NgModule({
    imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
    ],
   declarations: [
      AppComponent,
      MeasurementDisplay,
      MeasurementSet
    ],
    providers: [
    ],
    bootstrap: [
      AppComponent
    ],
})
export class AppModule {}
