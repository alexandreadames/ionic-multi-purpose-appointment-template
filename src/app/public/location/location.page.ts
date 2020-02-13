import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import mapboxgl from "mapbox-gl";

@Component({
  selector: "app-location",
  templateUrl: "./location.page.html",
  styleUrls: ["./location.page.scss"]
})
export class LocationPage implements OnInit {
  @ViewChild("map", { static: false }) mapElement; //ElementRef<HTMLElement, any>;
  map: any;

  constructor() {}

  ngOnInit() {}

  ionViewDidEnter() {
    this.loadMap();
  }

  loadMap() {
    /*Initializing Map*/

    mapboxgl.accessToken = "<PUT_YOUR_MAP_BOX_ACCESS_TOKEN_HERE>";
    this.map = new mapboxgl.Map({
      container: this.mapElement.nativeElement,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-37.335851, -5.209759],
      zoom: 18
    });

    /*let el = document.createElement('div');
    el.className = 'marker';
    el.style.backgroundImage =
      "url('https://i.picsum.photos/id/879/50/50.jpg')";
    new mapboxgl.Marker(el)
      .setLngLat([-37.335851, -5.209759])
      .addTo(this.map);*/
    let popup = new mapboxgl.Popup({ closeOnClick: false })
      .setLngLat([-37.335851, -5.209759])
      .setHTML("<h1>Core Studio</h1>")
      .addTo(this.map);

    let marker = new mapboxgl.Marker({
      draggable: false
    })
      .setLngLat([-37.335851, -5.209759])
      .setPopup(popup)
      .addTo(this.map);
  }
}
