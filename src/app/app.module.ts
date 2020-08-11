import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChartsComponent } from './components/charts/charts.component';
import { DateComponent } from './components/date/date.component';
import { IconsComponent } from './components/icons/icons.component';
import { ReactChartsComponent } from './components/react-charts/react-charts.component';
import { ResultComponent } from './components/result/result.component';
import { ResultLeftSideComponent } from './components/result-left-side/result-left-side.component';
import { ResultRightSideComponent } from './components/result-right-side/result-right-side.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IcondecreaseComponent } from './components/icondecrease/icondecrease.component';
import { IconIncreaseComponent } from './components/icon-increase/icon-increase.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent,
    DateComponent,
    IconsComponent,
    ReactChartsComponent,
    ResultComponent,
    ResultLeftSideComponent,
    ResultRightSideComponent,
    IcondecreaseComponent,
    IconIncreaseComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
