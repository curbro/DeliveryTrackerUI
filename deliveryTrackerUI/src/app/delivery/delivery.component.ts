import {Component, OnInit} from '@angular/core';
import {Delivery} from '../delivery';
import {DeliveryService} from '../delivery.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {
  deliveries: Delivery[];

  constructor(private deliveryService: DeliveryService) {}

  ngOnInit() {
    this.getDeliveries();
  }

  getDeliveries(): void {
    this.deliveryService.getDeliveries()
      .subscribe(deliveries => this.deliveries = deliveries);
  }

}
