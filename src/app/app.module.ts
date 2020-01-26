import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { TemperatureFormatPipe } from './pipes/temperature-format/temperature-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TemperatureFormatPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [TemperatureFormatPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
