import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import { ChartComponent } from './chart/chart.component';
import * as highmaps from 'highcharts/modules/map.src';
import { UploadComponent } from './upload/upload.component';
import { NgxFileDropModule } from 'ngx-file-drop';
import { VisualizationComponent } from './visualization/visualization.component';
import { DebuggerComponent } from './debugger/debugger.component';
import { MapboxComponent } from './mapbox/mapbox.component';
import { GridComponent } from './grid/grid.component';
import { AgGridModule } from 'ag-grid-angular';
import { VerifiedComponent } from './grid/verified/verified.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { AlertsComponent } from './grid/alerts/alerts.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import * as highstock from 'highcharts/modules/stock.src';
import { HighmapsComponent } from './highmaps/highmaps.component';


@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    UploadComponent,
    VisualizationComponent,
    DebuggerComponent,
    MapboxComponent,
    GridComponent,
    VerifiedComponent,
    AlertsComponent,
    HighmapsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule,
    NgxFileDropModule,
    AgGridModule.withComponents([VerifiedComponent]),
    BrowserAnimationsModule,
    MatIconModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [{ provide: HIGHCHARTS_MODULES, useFactory: () => [ highmaps, highstock ] }],
  bootstrap: [AppComponent]
})
export class AppModule { }
