import {Delivery} from './delivery';
import {QueryList, ViewChildren} from '@angular/core';

export class Shift {
  id: number;
  mileage: number;
  startMileage: number;
  endMileage: number;
  averageMileage: number;
  totalMileage: number;
  shiftStart: Date;
  shiftEnd: Date;
  numberOfDeliveries: number;
  totalTips: number;
  averageTips: number;
  shiftPayout: number;
  averageDolarsPerMile: number;
  @ViewChildren(Delivery) deliveries: QueryList<Delivery>;
}