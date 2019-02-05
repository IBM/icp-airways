import { Component, ViewChild, ElementRef } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import leaflet from "leaflet";
import 'leaflet-routing-machine';

@IonicPage()
@Component({
  selector: "page-map",
  templateUrl: "map.html"
})
export class MapPage {
  @ViewChild("map") mapContainer: ElementRef;
  map: any;
  public values: any;
  public latlongs;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.values = navParams.get("item");
    console.log(this.values);
  }
  ionViewDidEnter() {
  }
  loadmap() {
    this.map = leaflet.map("map").fitWorld();
    leaflet
      .tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attributions:
          'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18
      })
      .addTo(this.map);
    this.map
      .locate({
        setView: true,
        maxZoom: 13
      })
      .on("locationfound", e => {
        var latlngs = [[e.latitude, e.longitude], [this.values.lat, this.values.long]];
        var polyline = leaflet.polyline(latlngs, { color: "blue" }).addTo(this.map);
        this.map.fitBounds(polyline.getBounds());
        leaflet.Routing.control({
          waypoints: [
              leaflet.latLng(e.latitude, e.longitude),
              leaflet.latLng(this.values.lat, this.values.long)
          ],
          routeWhileDragging: true
      }).addTo(this.map);
      })
      .on("locationerror", err => {
        alert(err.message);
      });

  }
  ionViewDidLoad() {
    this.loadmap();
    console.log("ionViewDidLoad MapPage");
    let tabs = document.querySelectorAll(".show-tabbar");
    if (tabs !== null) {
      Object.keys(tabs).map(key => {
        tabs[key].style.display = "none";
      });
    }
  }

  ionViewWillLeave() {
    let tabs = document.querySelectorAll(".show-tabbar");
    if (tabs !== null) {
      Object.keys(tabs).map(key => {
        tabs[key].style.display = "flex";
      });
    }
  }
  cancel() {
    this.navCtrl.pop();
  }
}
