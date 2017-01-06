import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule, FormBuilder} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './AppComponent/components/AppComponent';
import {MeasurementDisplay} from "./MeasurementDisplay/components/MeasurementDisplay";

@NgModule({
    imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
    ],
   declarations: [
      AppComponent,
      MeasurementDisplay
    ],
    providers: [
    ],
    bootstrap: [
      AppComponent
    ],
})
export class AppModule {}
