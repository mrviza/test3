import { Component } from '@angular/core';

import tableData from '../assets/db.json';
import deliveryStatuses from '../assets/deliveryStatuses.json';
import deliveryTypes from '../assets/deliveryTypes.json';
import { Delivery, DeliveryImportData } from './app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test-app';
  tableData: Delivery[] = tableData;
  deliveryStatuses: DeliveryImportData = deliveryStatuses;
  deliveryTypes: DeliveryImportData = deliveryTypes;
}
