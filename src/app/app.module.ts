import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {TextMaskModule} from 'angular2-text-mask';
import {FormsModule} from '@angular/forms';
import { AppDirective } from './app.directive';

@NgModule({
  declarations: [
    AppComponent,
    AppDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TextMaskModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
