import { Component, OnInit, ViewChild } from '@angular/core';
import { Deck } from '@deck.gl/core';
import { GeoJsonLayer, PointCloudLayer, ArcLayer, ScatterplotLayer, IconLayer, BitmapLayer, ColumnLayer, GridCellLayer, SolidPolygonLayer } from '@deck.gl/layers';
import {ContourLayer} from '@deck.gl/aggregation-layers';
import { GoogleMapsOverlay as DeckOverlay } from '@deck.gl/google-maps';
import { } from 'googlemaps';
@Component({
  selector: 'app-visualization',
  templateUrl: './visualization.component.html',
  styleUrls: ['./visualization.component.scss']
})
export class VisualizationComponent implements OnInit {
  @ViewChild('map', { static: false }) mapElement: any;
  map: google.maps.Map;
  constructor() { }

  ngOnInit() {
    const mapProperties = {
      center: { lng: -122.466233, lat: 37.684638 }, zoom: 12
      // mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(document.getElementById('map'), mapProperties);
    const COUNTRIES =
      'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_scale_rank.geojson'; //eslint-disable-line
    const AIR_PORTS =
      'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_airports.geojson';
    const INITIAL_VIEW_STATE = {
      latitude: 51.47,
      longitude: 0.45,
      zoom: 4,
      bearing: 0,
      pitch: 30
    };
    const ICON_MAPPING = {
      marker: { x: 0, y: 0, width: 128, height: 128, mask: true }
    };
    // const data = [
    //   { centroid: [-122.4, 37.7], value: 0.2 }];
    const data = [
      { name: 'Colma (COLM)', code: 'CM', address: '365 D Street, Colma CA 94014', exits: 42140, coordinates: [-122.466233, 37.684638] },
    ];
    // center: [-66.118, 18.466] zoom: 4
    const solidPolygonLayer = new SolidPolygonLayer({
      data: [[[-80.190, 25.774], [-66.118, 18.466], [-64.757, 32.321]
      ]],
      getPolygon: d => d,
      getColor: [255, 0, 0],
      extruded: false
    });
    // center: { lng: -122.466233, lat: 37.684638 }, zoom: 4
    const scatterPlotLayer = new ScatterplotLayer({
      id: 'scatterplot-layer',
      data,
      pickable: true,
      opacity: 0.8,
      stroked: true,
      filled: true,
      radiusScale: 6,
      // radiusMinPixels: 1,
      // radiusMaxPixels: 1000,
      lineWidthMinPixels: 1,
      getPosition: d => d.coordinates,
      getRadius: d => d.exits,
      getFillColor: d => [255, 140, 0],
      getLineColor: d => [0, 0, 0],
      onHover: ({ object, x, y }) => {
        const tooltip = `${object.name}\n${object.address}`;
        /* Update tooltip
           http://deck.gl/#/documentation/developer-guide/adding-interactivity?section=example-display-a-tooltip-for-hovered-object
        */
      }
    });
    const geoJsonLayer = new GeoJsonLayer({
      id: 'airports',
      data: AIR_PORTS,
      // Styles
      filled: true,
      pointRadiusMinPixels: 2,
      opacity: 1,
      pointRadiusScale: 2000,
      getRadius: f => 11 - f.properties.scalerank,
      getFillColor: [200, 0, 80, 180],
      // Interactive props
      pickable: true,
      autoHighlight: true,
      onClick: info =>
        // eslint-disable-next-line
        info.object && alert(`${info.object.properties.name} (${info.object.properties.abbrev})`)
    });
    // center: { lng: -0.4531566, lat: 51.4709959 } , zoom: 3
    const arcLayer = new ArcLayer({
      id: 'arcs',
      data: AIR_PORTS,
      dataTransform: d => d.features.filter(f => f.properties.scalerank < 4),
      // Styles
      getSourcePosition: f => [-0.4531566, 51.4709959], // London
      getTargetPosition: f => f.geometry.coordinates,
      getSourceColor: [0, 128, 200],
      getTargetColor: [200, 0, 80],
      getWidth: 1
    });
    // center: { lng: -122.5190, lat: 37.7045 }, zoom: 12
    const bitmapLayer = new BitmapLayer({
      id: 'bitmap-layer',
      bounds: [-122.5190, 37.7045, -122.355, 37.829],
      image: 'https://raw.githubusercontent.com/uber-common/deck.gl-data/master/website/sf-districts.png'
    });
    const countriesGeoJson = new GeoJsonLayer({
      id: 'base-map',
      data: COUNTRIES,
      // Styles
      stroked: true,
      filled: true,
      lineWidthMinPixels: 2,
      opacity: 0.4,
      getLineDashArray: [3, 3],
      getLineColor: [60, 60, 60],
      getFillColor: [200, 200, 200]
    });
    // center: { lng: -122.5190, lat: 37.7045 }, zoom: 6
    const gridCellLayer = new GridCellLayer({
      id: 'grid-cell-layer',
      data: [{ centroid: [-122.4, 37.7], value: 1000 }],
      pickable: true,
      extruded: true,
      cellSize: 2000,
      elevationScale: 2000,
      getPosition: d => d.centroid,
      getFillColor: d => [48, 128, d.value * 255, 255],
      getElevation: d => d.value,
      onHover: ({ object, x, y }) => {
        const tooltip = `height: ${object.value * 5000}m`;
        /* Update tooltip
           http://deck.gl/#/documentation/developer-guide/adding-interactivity?section=example-display-a-tooltip-for-hovered-object
        */
      }
    });
    // center: { lng: -122.466233, lat: 37.684638 }, zoom: 12
    const iconLayer = new IconLayer({
      id: 'icon-layer',
      data: [
        { name: 'Colma (COLM)', code: 'CM', address: '365 D Street, Colma CA 94014', exits: 4214, coordinates: [-122.466233, 37.684638] },
      ],
      pickable: true,
      // iconAtlas and iconMapping are required
      // getIcon: return a string
      iconAtlas: 'assets/icon.png',
      iconMapping: ICON_MAPPING,
      getIcon: d => 'marker',
      sizeScale: 20,
      getPosition: d => d.coordinates,
      getSize: d => 5,
      getColor: d => [Math.sqrt(d.exits), 140, 0],
      onHover: ({ object, x, y }) => {
        const tooltip = `${object.name}\n${object.address}`;
        /* Update tooltip
           http://deck.gl/#/documentation/developer-guide/adding-interactivity?section=example-display-a-tooltip-for-hovered-object
        */
      }
    });
    // center: { lng: -122.466233, lat: 37.684638 }, zoom: 12
    const pointCloudLayer = new PointCloudLayer({
      id: 'point-cloud-layer',
      data: [
        { position: [-122.4, 37.7, 12], normal: [-1, 0, 0], color: [255, 255, 0] }
      ],
      pickable: false,
      // coordinateSystem: COORDINATE_SYSTEM.METER_OFFSETS,
      coordinateOrigin: [-122.4, 37.74],
      radiusPixels: 40,
      getPosition: d => d.position,
      getNormal: d => d.normal,
      getColor: d => d.color,
      onHover: ({ object, x, y }) => {
        const tooltip = object.position.join(', ');
        /* Update tooltip
           http://deck.gl/#/documentation/developer-guide/adding-interactivity?section=example-display-a-tooltip-for-hovered-object
        */
      }
    });
    const contourLayer = new ContourLayer({
      id: 'contourLayer',
      // Three contours are rendered.
      contours: [
        {threshold: 1, color: [255, 0, 0, 255], strokeWidth: 1}, // => Isoline for threshold 1
        {threshold: 5, color: [0, 255, 0], strokeWidth: 2}, // => Isoline for threshold 5
        {threshold: [6, 10], color: [0, 0, 255, 128]} // => Isoband for threshold range [6, 10)
      ],
      cellSize: 200,
      getPosition: d => d.COORDINATES,
    });
    const overlay = new DeckOverlay({
      layers: [
        // solidPolygonLayer
        // scatterPlotLayer
        // geoJsonLayer
        // arcLayer
        // bitmapLayer
        // countriesGeoJson
        // gridCellLayer
        // iconLayer,
        // pointCloudLayer
        // contourLayer
      ]
    });
    overlay.setMap(this.map);
  }

}
