import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, FormBuilder } from '@angular/forms';
import { BrowserModule  } from '@angular/platform-browser';
import {HomeComponent} from './homeComponent/homeComponent.component'
@NgModule({
    imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
    ],
   declarations: [
      HomeComponent
    ],
    providers: [
    ],
    bootstrap: [
      HomeComponent
    ],
})
export class AppModule {}
