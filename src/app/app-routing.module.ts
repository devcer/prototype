import { ChartComponent } from './chart/chart.component';
import { MapboxComponent } from './mapbox/mapbox.component';
import { VisualizationComponent } from './visualization/visualization.component';
import { UploadComponent } from './upload/upload.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DebuggerComponent } from './debugger/debugger.component';
import { GridComponent } from './grid/grid.component';
import { HighmapsComponent } from './highmaps/highmaps.component';

const routes: Routes = [{
  path: 'upload',
  component: UploadComponent
}, {
  path: 'visualization',
  component: VisualizationComponent
}, {
  path: 'debugger',
  component: DebuggerComponent
}, {
  path: 'mapbox',
  component: MapboxComponent
}, {
  path: 'grid',
  component: GridComponent
}, {
  path: 'charts',
  component: ChartComponent
}, {
  path: 'highmaps',
  component: HighmapsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
