import { Component, OnInit } from '@angular/core';
import { Trip } from '../../models/trip';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-trips-list',
  templateUrl: './trips-list.component.html',
  styleUrls: ['./trips-list.component.scss']
})
export class TripsListComponent implements OnInit {

  title = 'Flights of a Lifetime';
  addTripFormMode = false;
  pendingAmount: number;
  tripForm: FormGroup;
  moneyForm: FormGroup;

  trips: Array<Trip> = [
    {
      name: 'Super Flights to Mars',
      price: 18200,
      duration: '2 Earth Years',
      description: 'Race through the Solar System to reach the Red planet. This flight will take 11 Earth Years for each side of the journey.',
      image_url: 'https://angular.io/assets/images/logos/angular/angular.png',
      booked: false
    },
    {
      name: 'Super Flights to Mars',
      price: 18200,
      duration: '2 Earth Years',
      description: 'Race through the Solar System to reach the Red planet. This flight will take 11 Earth Years for each side of the journey.',
      image_url: 'https://angular.io/assets/images/logos/angular/angular.png',
      booked: false
    },
    {
      name: 'Super Flights to Mars',
      price: 18200,
      duration: '2 Earth Years',
      description: 'Race through the Solar System to reach the Red planet. This flight will take 11 Earth Years for each side of the journey.',
      image_url: 'https://angular.io/assets/images/logos/angular/angular.png',
      booked: false
    }
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.tripForm = this.fb.group({
      name: new FormControl('', Validators.required),
      price: new FormControl(0, Validators.required),
      duration: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      imageUrl: new FormControl('', Validators.required),
      booked: new FormControl()
    });

    this.moneyForm = this.fb.group({
      money: new FormControl()
    });
  }

  toggleDisplayMode() {
    this.addTripFormMode = !this.addTripFormMode;
  }

  toggleBookingStatus(trip: Trip) {
    if (this.pendingAmount - trip.price > 0) {
      this.pendingAmount -= trip.price;
      trip.booked = !trip.booked;
    }
  }

  formSubmitted() {
    const newTrip = {
      name: this.tripForm.controls.name.value,
      price: this.tripForm.controls.price.value,
      duration: this.tripForm.controls.duration.value,
      description: this.tripForm.controls.description.value,
      image_url: this.tripForm.controls.imageUrl.value,
      booked: false
    };

    this.trips.push(newTrip);
    this.toggleDisplayMode();
  }

  addMoney() {
    console.log(this.moneyForm.controls.money.value);
    const temp = this.moneyForm.controls.money.value;
    this.pendingAmount = temp;
  }

}
