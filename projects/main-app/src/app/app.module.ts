import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MyComponentsModule} from 'my-components';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MyComponentsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
