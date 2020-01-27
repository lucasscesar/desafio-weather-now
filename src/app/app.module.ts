import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
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
    BrowserModule,
    HttpClientModule
  ],
  providers: [TemperatureFormatPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
