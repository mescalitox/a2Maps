import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'My first angular2-google-maps project';
  lat: number = 51.678418;
  lng: number = 7.809007;

  ngOnInit(){
    navigator.geolocation.getCurrentPosition(position => {
      this.lat = position.coords.latitude; 
      this.lng = position.coords.longitude;
    });
  }
  
}
