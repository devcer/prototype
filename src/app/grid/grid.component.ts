import { VerifiedComponent } from './verified/verified.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  columnDefs = [
    { headerName: 'VERIFIED', field: 'verified', sortable: true, filter: true, cellRendererFramework: VerifiedComponent },
    { headerName: 'ALERTS', field: 'alerts', filter: true },
    { headerName: 'TIMESLOT', field: 'timeslot', sortable: true, filter: true },
    { headerName: 'OUTLET PH', field: 'outletph', sortable: true, filter: true },
    { headerName: 'OUTLET TURBIDITY', field: 'outletturbidity', sortable: true, filter: true },
    { headerName: 'OUTLET RC', field: 'outletrc', sortable: true, filter: true }
  ];

  rowData = [
    { verified: true, alerts: [], timeslot: '02:00 AM', outletph: 6.7, outletturbidity: 5000, outletrc: 1000 },
    { verified: true, alerts: [], timeslot: '03:00 AM', outletph: 7.4, outletturbidity: 3455, outletrc: 2340 },
    { verified: false, alerts: [], timeslot: '04:00 AM', outletph: 6.5, outletturbidity: 3465, outletrc: 1238 },
    { verified: false, alerts: [], timeslot: '05:00 AM', outletph: 6.7, outletturbidity: 6453, outletrc: 5454 },
    { verified: false, alerts: [], timeslot: '06:00 AM', outletph: 6.5, outletturbidity: 5453, outletrc: 2300 },
    { verified: true, alerts: [], timeslot: '07:00 AM', outletph: 6.8, outletturbidity: 5200, outletrc: 2300 },
    { verified: true, alerts: [], timeslot: '08:00 AM', outletph: 6.2, outletturbidity: 5202, outletrc: 2340 },
    { verified: false, alerts: [], timeslot: '09:00 AM', outletph: 6.6, outletturbidity: 1035, outletrc: 3670 },
    { verified: true, alerts: [], timeslot: '10:00 AM', outletph: 6.6, outletturbidity: 3870, outletrc: 3670 },
  ];
  constructor() { }

  ngOnInit() {
  }

}
