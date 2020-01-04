import { data } from './../../assets/us-population-density';
import { Component, OnInit } from '@angular/core';
import { Chart, StockChart } from 'angular-highcharts';
import { MapChart } from 'angular-highcharts';
import { stockData } from './data';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  chart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Linechart'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Line 1',
        data: [1, 2, 3],
        type: undefined
      }
    ]
  });
  mapChart = new MapChart({
    chart: {
      map: 'countries/us/us-all',
      borderWidth: 1
    },

    title: {
      text: 'US population density (/km²)'
    },

    exporting: {
      sourceWidth: 600,
      sourceHeight: 500
    },

    legend: {
      layout: 'horizontal',
      borderWidth: 0,
      backgroundColor: 'rgba(255,255,255,0.85)',
      floating: true,
      verticalAlign: 'top',
      y: 25
    },

    mapNavigation: {
      enabled: true
    },

    colorAxis: {
      min: 1,
      type: 'logarithmic',
      minColor: '#EEEEFF',
      maxColor: '#000022',
      stops: [
        [0, '#EFEFFF'],
        [0.67, '#4444FF'],
        [1, '#000022']
      ]
    },

    series: [{
      type: undefined,
      animation: {
        duration: 1000
      },
      data,
      joinBy: ['postal-code', 'code'],
      dataLabels: {
        enabled: true,
        color: '#FFFFFF',
        format: '{point.code}'
      },
      name: 'Population density',
      tooltip: {
        pointFormat: '{point.code}: {point.value}/km²'
      }
    }]
  });
  pieChart = new Chart({
    chart: {
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'Browser market shares at a specific website, 2014'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        shadow: false,
        center: ['50%', '50%'],
        size: '45%',
        innerSize: '40%'
      }
    },
    series: [{
      type: 'pie',
      name: 'Browser share',
      data: [
        ['Firefox', 45.0],
        ['IE', 26.8],
        {
          name: 'Chrome',
          y: 12.8,
          sliced: true,
          selected: true
        },
        ['Safari', 8.5],
        ['Opera', 6.2],
        ['Others', 0.7]
      ]
    }]
  });
  // scatterChart = new Chart({
  //   chart: {
  //     type: 'scatter',
  //     zoomType: 'xy'
  //   },
  //   title: {
  //     text: 'Scatter plot'
  //   },
  //   series: [{
  //     type: 'scatter',
  //     zoomType: 'xy',
  //     name: 'Browser share',
  //     data: [1, 1.5, 2.8, 3.5, 3.9, 4.2]
  //   }]
  // });
  stockChart: StockChart;
  // add point to chart serie
  add() {
    this.chart.addPoint(Math.floor(Math.random() * 10));
  }
  constructor() { }

  ngOnInit() {
    this.stockChart = new StockChart({
      chart: {
        width: 1500
      },
      rangeSelector: {
        selected: 1
      },
      title: {
        text: 'AAPL Stock Price'
      },
      series: [{
        name: 'AAPL',
        data: stockData,
        tooltip: {
          valueDecimals: 2
        }
      }]
    } as any);
  }
}
