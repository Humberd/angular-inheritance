import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent, BaseDirective, ProperDirective } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ProperDirective,
    BaseDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
