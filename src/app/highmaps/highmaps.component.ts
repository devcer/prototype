import { Component, OnInit } from '@angular/core';
import { MapChart } from 'angular-highcharts';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-highmaps',
  templateUrl: './highmaps.component.html',
  styleUrls: ['./highmaps.component.scss']
})
export class HighmapsComponent implements OnInit {
  mapChart = new MapChart({
    title: {
      text: null
    },

    mapNavigation: {
      enabled: true
    },

    colorAxis: {
      min: 0,
      stops: [
        [0, '#EFEFFF'],
        [0.5, Highcharts.getOptions().colors[0]],
        // [
        //   1,
        //   Highcharts.Color(Highcharts.getOptions().colors[0])
        //     .brighten(-0.5)
        //     .get()
        // ]
      ]
    },

    legend: {
      layout: 'vertical',
      align: 'left',
      verticalAlign: 'bottom'
    },

    series: [
      {
        // data: data,
        // mapData: mapGeoJSON,
        joinBy: ['hc-key', 'key'],
        name: 'Random data',
        states: {
          hover: {
            // color: Highcharts.getOptions().colors[2]
          }
        },
        dataLabels: {
          // enabled: showDataLabels,
          // formatter: function() {
          //   return mapKey === 'custom/world' || mapKey === 'countries/us/us-all'
          //     ? this.point.properties && this.point.properties['hc-a2']
          //     : this.point.name;
          // }
        },
        point: {
          events: {
            // On click, look for a detailed map
            // click: function() {
            //   var key = this.key;
            //   $('#mapDropdown option').each(function() {
            //     if (
            //       this.value ===
            //       'countries/' + key.substr(0, 2) + '/' + key + '-all.js'
            //     ) {
            //       $('#mapDropdown')
            //         .val(this.value)
            //         .change();
            //     }
            //   });
            // }
          }
        }
      },
      {
        type: 'mapline',
        name: 'Separators',
        // data: Highcharts.geojson(mapGeoJSON, 'mapline'),
        nullColor: 'gray',
        showInLegend: false,
        enableMouseTracking: false
      }
    ]
  } as any);
  constructor() {}

  ngOnInit() {}
}
