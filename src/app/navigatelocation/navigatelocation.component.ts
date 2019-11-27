import {Component, NgZone, OnInit} from '@angular/core';
import * as map from 'mapbox-gl';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import * as forwardGeocoder from '@mapbox/mapbox-gl-geocoder';
import * as mapboxgl from 'mapbox-gl';
import {RoutingapiserviceService} from '../routingapiservice.service';
import {InteractionService} from '../interaction.service';

// const map = require('mapbox-gl')

@Component({
  selector: 'app-navigatelocation',
  templateUrl: './navigatelocation.component.html',
  styleUrls: ['./navigatelocation.component.css']
})
export class NavigatelocationComponent implements OnInit {
  addresses = ['koramangala', 'marathahalli'];
  jsonresponse;
  allcoordinates;
  points = [];
  coordinates = [];
  waypoints: any;
  userData: any =
    {
      vehiclenumber: 'KA04P9437',
      totaldistance: '20',
      depoaddress: 'koramangala',
    };
  test: any = {};
  orderData: any = [{
    customername: 'Adams Bakers',
    ordernumber: 'OR13213',
    customeraddress: 'marathahalli',
    ordervolume: '10L',

    status: 'pending',


  },
    {
      customername: 'Clark Davis',
      ordernumber: 'OR13214',
      customeraddress: 'forum%20mall',
      ordervolume: '50L',
      status: 'pending',

    },
    {
      customername: 'Reily Smith',
      ordernumber: 'OR13215',
      customeraddress: 'whitefield,bleh,bleh,bleh,560089',
      ordervolume: '60L',
      status: 'delivered',


    }];

  // const myaddress: string[];
  constructor(private routeapiservice: RoutingapiserviceService, private zone: NgZone,
              private interactionservice: InteractionService) {
  }


  ngOnInit() {
    // map.accessToken = 'pk.eyJ1IjoiZ2F1dGhhbTk5IiwiYSI6ImNrMzRlMmxrNjE0ZTMzbXBhOWRwdDk1eTcifQ.-ZceQ8jARpf90y0tJnQhoQ';
    // (map as any).accessToken = 'pk.eyJ1IjoiZ2F1dGhhbTk5IiwiYSI6ImNrMzRlMmxrNjE0ZTMzbXBhOWRwdDk1eTcifQ.-ZceQ8jARpf90y0tJnQhoQ';
    // this.interactionservice.messageSource.subscribe(
    //   message => {
    //     console.log(message);
    //     if (message === 'hi') {
    //       console.log(message);
    //       alert(message);
    //     } else {
    //       alert('notworking');
    //       console.log(message);
    //
    //     }
    //   }
    // );
    this.maputil();
  }
    maputil() {
      this.routeapiservice.getLatandLong().subscribe((data) => {
        this.zone.run(() => {
          this.allcoordinates = data;
          this.coordinates = this.updatevalue(data);
          updatepointsonmap(this.coordinates, this.addresses);
          console.log(this.coordinates);
          this.routeapiservice.getGeoJsonLatLOng(this.coordinates).subscribe((data2) => {
            this.zone.run(() => {
              this.waypoints = data2;
              makegeojsonline(data2, this.addresses.length - 1);
              // temp2.resourceSets[0].resources[0].routePath.line.coordinates
              // console.log(data2)
            });
          });


          // console.log(data)
        });

      });


      //     for(i=0;i<this.addresses.length;i++)
      //     {
      //   var lat = this.allcoordinates[i].resourceSets.resources[0].point.coordinates[1]
      //   var long = this.allcoordinates[i].resourceSets.resources[0].point.coordinates[0]
      //             // console.log(this.jsonresponse[0].resources[0].point.coordinates
      //   var geomarker = new mapboxgl.Marker({
      //     draggable: true,
      //   })

      //     .setLngLat([lat, long])
      //     .addTo(mapp);
      // }

      // console.log(this.allcoordinates)
      const coordinates = document.getElementById('coordinates');
      Object.getOwnPropertyDescriptor(map, 'accessToken').set('pk.eyJ1IjoiZ2F1dGhhbTk5IiwiYSI6ImNrMzRlMmxrNjE0ZTMzbXBhOWRwdDk1eTcifQ.-ZceQ8jARpf90y0tJnQhoQ');
      const mapp = new map.Map({
          container: 'map',
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [77.65542724609375, 12.940049667358398],
          zoom: 9 // starting zoom

        }
      );


      const geomarker = new mapboxgl.Marker({
        draggable: true,
      }).setLngLat([-74.50, 40])
        .addTo(mapp);

      const geocoder = new MapboxGeocoder({
        accessToken: map.accessToken,
        localGeocoder: forwardGeocoder,
        zoom: 14,
        placeholder: 'Enter search e.g. Lincoln Park',
        mapboxgl,
        marker: false,
      });
      console.log(geocoder);
      mapp.addControl(geocoder);

      function onDragEnd() {
        const lngLat = geomarker.getLngLat();
        coordinates.style.display = 'block';
        coordinates.innerHTML = 'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;
        // console.log('Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat)
      }

      // function result()
      //   {
      //     var lngLat = MapboxGeocoder.getLngLat();
      //     coordinates.style.display = 'block';
      //     coordinates.innerHTML = 'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;
      //     console.log('Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat)
      //   }
      geomarker.on('dragend', onDragEnd);
      geocoder.on('results', function(result) {
        console.log(result.features[0].center);
        coordinates.style.display = 'block';
        const longitude = result.features[0].center[0];
        const latitude = result.features[0].center[1];
        coordinates.innerHTML = 'Longitude: ' + longitude + '<br />Latitude: ' + latitude;
        geomarker.setLngLat([longitude, latitude]);
      });

      function makegeojsonline(coordinateset, lengthofset) {
        mapp.on('load', function() {
          for (let i = 0; i < lengthofset; i++) {
            // console.log(coordinateset[i].resourceSets[0].resources[0].routePath.line.coordinates)
            const actualcordinates = coordinateset[i].resourceSets[0].resources[0].routePath.line.coordinates;
            const revcoordinates = [];
            // console.log(actualcordinates)
            for (let j = 0; j < actualcordinates.length; j++) {
              revcoordinates[j] = [actualcordinates[j][1], actualcordinates[j][0]];
            }
            console.log(revcoordinates);
            mapp.addLayer({
              id: 'route' + i,
              type: 'line',
              source: {
                type: 'geojson',
                data: {
                  type: 'Feature',
                  properties: {},
                  geometry: {
                    type: 'LineString',
                    coordinates: revcoordinates
                  }
                }
              },
              layout: {
                'line-join': 'round',
                'line-cap': 'round'
              },
              paint: {
                'line-color': '#ff0808',
                'line-width': 5
              }
            });
          }

        });


      }

      function updatepointsonmap(coordinates, addresses) {
        for (let i = 0; i < addresses.length; i++) {
          const geomarker = new mapboxgl.Marker({
            draggable: true,
          }).setLngLat([coordinates[i][1], coordinates[i][0]])
            .addTo(mapp);
        }
      }
    }
  updatevalue(data) {
    this.allcoordinates = data;
    for (let i = 0; i < this.addresses.length; i++) {
      this.coordinates[i] = this.allcoordinates[i].resourceSets[0].resources[0].point.coordinates;
    }
    // console.log(this.coordinates)
    return this.coordinates;
  }

  onsavebutton() {
    console.log('hi from the save button');
  }
}
