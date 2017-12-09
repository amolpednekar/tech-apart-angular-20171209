import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  trip_name = 'Trip to Mars';
  trip_price = 20000;
  trip_duration = '3 Earth Years'
  trip_description = 'Race through the Solar System to reach the Red planet.'
}
