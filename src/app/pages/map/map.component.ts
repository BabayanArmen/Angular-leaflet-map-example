import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  map: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.initMap();

    L.marker([51.5, -0.09]).addTo(this.map).bindPopup("<b>Hello world!</b><br>I am a popup.");

    L.circle([51.508, -0.11], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 5000
    }).addTo(this.map).bindPopup("I am a circle.");

    L.polygon([
      [51.509, -0.08],
      [51.503, -0.06],
      [51.51, -0.047]
    ]).addTo(this.map);

    L.popup()
    .setLatLng([40.177200, 	44.503490])
    .setContent("Yerevan")
    .openOn(this.map);

    this.map.on('click', (e: any) => {
          this.onMapClick(e);
          this.addMarker(e);
    });

  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 39.8282, -98.5795 ],
      zoom: 3
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    tiles.addTo(this.map);
  }

  onMapClick(e: any) {
    console.log(e.latlng.lat);
    console.log(e.latlng.lng);

    L.popup()
    .setLatLng(e.latlng)
    .setContent("You clicked the map at " + e.latlng.toString())
    .openOn(this.map);
  }

  addMarker(e: any) {
    L.marker([e.latlng.lat, e.latlng.lng]).addTo(this.map)
    .bindPopup("Custom marker, db-click marker for details")
    .on('dblclick', (e: any) => {
      this.goToDetails(e);
    })
  }

  goToDetails(e: any) {
    this.router.navigate(['detail'])
  }


}
