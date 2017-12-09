import { Component, OnInit } from '@angular/core';
import { Trip } from '../../models/trip';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-trips-list',
  templateUrl: './trips-list.component.html',
  styleUrls: ['./trips-list.component.scss']
})
export class TripsListComponent implements OnInit {

  title = 'Flights of a Lifetime';
  addTripFormMode = false;
  tripForm: FormGroup;

  trips: Array<Trip> = [
    {
      name: 'Super Flights to Mars',
      price: 18200,
      duration: '2 Earth Years',
      description: 'Race through the Solar System to reach the Red planet. This flight will take 11 Earth Years for each side of the journey.',
      image_url: 'https://angular.io/assets/images/logos/angular/angular.png'
    },
    {
      name: 'Super Flights to Mars',
      price: 18200,
      duration: '2 Earth Years',
      description: 'Race through the Solar System to reach the Red planet. This flight will take 11 Earth Years for each side of the journey.',
      image_url: 'https://angular.io/assets/images/logos/angular/angular.png'
    },
    {
      name: 'Super Flights to Mars',
      price: 18200,
      duration: '2 Earth Years',
      description: 'Race through the Solar System to reach the Red planet. This flight will take 11 Earth Years for each side of the journey.',
      image_url: 'https://angular.io/assets/images/logos/angular/angular.png'
    }
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.tripForm = this.fb.group({
      name: new FormControl(),
      price: new FormControl(),
      duration: new FormControl(),
      description: new FormControl(),
      imageUrl: new FormControl("https://angular.io/assets/images/logos/angular/angular.png")
    });
  }

  toggleDisplayMode() {
    this.addTripFormMode = !this.addTripFormMode;
  }

  formSubmitted() {
    const newTrip = {
      name: this.tripForm.controls.name.value,
      price: this.tripForm.controls.price.value,
      duration: this.tripForm.controls.duration.value, 
      description: this.tripForm.controls.description.value,
      image_url: this.tripForm.controls.imageUrl.value
    };

    this.trips.push(newTrip);
    this.toggleDisplayMode();
  }

}
