import { Component } from '@angular/core';

import tableData from '../assets/db.json';
import deliveryStatuses from '../assets/deliveryStatuses.json';
import deliveryTypes from '../assets/deliveryTypes.json';
import { Delivery, DeliveryImportData, FilterData } from './app';
import { DeliveryInfo } from './info/info.component.d';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test-app';
  tableData: Delivery[] = tableData;
  deliveryTypes: DeliveryImportData = deliveryTypes;
  deliveryStatuses: DeliveryImportData = deliveryStatuses;
  isFilterShow: boolean = false;
  filterData?: FilterData;
  delviryData?: DeliveryInfo;

  selectRow(event: Delivery) {
    this.delviryData = {
      status: event.status || '–',
      qurrentPosition: event.departureDetails.qurrentPosition || '–',
      receiverName: event.receiver.name || '–',
      receiverPhone: event.receiver.phoneNumber || '–',
      courierName: event.departureDetails.courierName || '–',
      courierPhone: event.departureDetails.courierPhone || '–',
      note: event.departureDetails.note || '–',
      number: event.departureDetails.number || '–',
      type: event.type || '–',
      senderName: event.sender.name || '–',
      payerName: event.departureDetails.payerName || '–',
      sendingDate: event.sendingDate || '–',
      receivingDate: event.receivingDate || '–',
      storagePeriod: event.departureDetails.storagePeriod || '–',
    };

    this.isFilterShow = false;
  }

  changeFilter(filter: FilterData) {
    this.filterData = filter;
    this.delviryData = undefined;
  }

  toggleFilter() {
    this.isFilterShow = !this.isFilterShow;
  }
}
