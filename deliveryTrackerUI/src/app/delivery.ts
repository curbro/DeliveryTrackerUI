import { Shift } from './shift';
import { ContentChild } from '@angular/core';

export class Delivery {
  id: number;
  orderTotal: number;
  tip: number;
  totalPaid: number;
  maintenance: number;
  deliveryPayout: number;
  @ContentChild(Shift) shift: Shift;
}