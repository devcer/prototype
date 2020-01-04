import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { analyzeFileForInjectables } from '@angular/compiler';

@Component({
  selector: 'app-verified',
  templateUrl: './verified.component.html',
  styleUrls: ['./verified.component.scss']
})
export class VerifiedComponent implements ICellRendererAngularComp {
  public params: any;

  agInit(params: any): void {
    this.params = params;
    console.log(params);
  }
  refresh(): boolean {
    return false;
  }
}
