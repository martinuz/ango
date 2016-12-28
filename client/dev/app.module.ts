import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, FormBuilder } from '@angular/forms';
import { BrowserModule  } from '@angular/platform-browser';
import {Test} from './test/components/test'
@NgModule({
    imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
    ],
   declarations: [
      Test
    ],
    providers: [
    ],
    bootstrap: [
      Test
    ],
})
export class AppModule {}
