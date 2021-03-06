import {Component, OnInit} from '@angular/core';
import {ToastController,Platform,LoadingController} from '@ionic/angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Marker,
  GoogleMapsAnimation,
  MyLocation
} from '@ionic-native/google-maps';

@Component({
  selector: 'app-bankslocation',
  templateUrl: './bankslocation.page.html',
  styleUrls: ['./bankslocation.page.scss'],
})
export class BankslocationPage implements OnInit {

  map: GoogleMap;
  loading: any;

  constructor(
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private platform: Platform) {}

  async ngOnInit() {
    // Since ngOnInit() is executed before `deviceready` event,
    // you have to wait the event.
    await this.platform.ready();
    this.loadMap();//loading the map
  }

  loadMap() {//loading map function
    this.map = GoogleMaps.create('map_canvas', {
      camera: {//starting point of the map
        target: {
          lat: 43.0741704,
          lng: -89.3809802
        },
        zoom: 18,
        tilt: 30
      }
    });

  }

  async onButtonClick() {//getting the actual location in async format
    this.map.clear();

    this.loading = await this.loadingCtrl.create({
      message: 'Please wait...'
    });
    await this.loading.present();

    // Get the location of you
    this.map.getMyLocation().then((location: MyLocation) => {
        this.loading.dismiss();
        console.log(JSON.stringify(location, null, 2));

        // Move the map camera to the location with animation
        this.map.animateCamera({
          target: location.latLng,
          zoom: 17,
          tilt: 30
        });

        // add a marker
        let marker: Marker = this.map.addMarkerSync({
          title: 'My Location!',
          snippet: 'Here is your location Please check the near banks!',
          position: location.latLng,
          animation: GoogleMapsAnimation.BOUNCE
        });

        // show the infoWindow
        marker.showInfoWindow();

        // If clicked it, display the alert
        marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
          this.showToast('clicked!');
        });
      })
      .catch(err => {//printing error if there is some
        this.loading.dismiss();
        this.showToast(err.error_message);
      });
  }

  async showToast(message: string) {// async function to print a msg
    let toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'middle'
    });

    toast.present();
  }
}