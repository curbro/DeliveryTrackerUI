import {Shift} from '../shift';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-shift',
  templateUrl: './shift.component.html',
  styleUrls: ['./shift.component.css']
})
export class ShiftComponent implements OnInit {

  shift: Shift = {
    id: 1,
    mileage: 10,
    startMileage: 12345,
    endMileage: 12355,
    averageMileage: 0,
    totalMileage: 10,
    shiftStart: new Date(),
    shiftEnd: new Date(),
    numberOfDeliveries: 3,
    totalTips: 37,
    averageTips: 6,
    shiftPayout: 52,
    averageDolarsPerMile: 3.21,
    deliveries: null
  };

  constructor() {}

  ngOnInit() {
  }

}
