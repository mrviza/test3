import { Component, OnChanges, Input } from '@angular/core';
import { ValueFormatterParams } from 'ag-grid-community';
import { Delivery } from '../app.d';
import { TableRowData } from './grid-table.component.d';

@Component({
  selector: 'grid-table',
  templateUrl: './grid-table.component.html',
  styleUrls: ['./grid-table.component.scss'],
})
export class TableComponent implements OnChanges {
  @Input() data: Delivery[] = [];

  columnDefs = [
    { field: 'sendingDate', sortable: true, valueFormatter: this.dateFormater },
    { field: 'number', sortable: true },
    { field: 'status', sortable: true },
    { field: 'type', sortable: true },
    { field: 'problems', valueFormatter: this.booleanFormater },
    { field: 'responsible', sortable: true },
    { field: 'senderCity', sortable: true },
    { field: 'receiverCity', sortable: true },
    {
      field: 'receivingDate',
      sortable: true,
      valueFormatter: this.dateFormater,
    },
  ];

  rowData: TableRowData[] = [];

  constructor() {}

  ngOnChanges(): void {
    this.rowData = this.data.map((el) => {
      return {
        sendingDate: el.sendingDate,
        number: el.departureDetails.number,
        status: el.status,
        type: el.type,
        problems: el.problems,
        responsible: el.responsible,
        senderCity: el.sender.city,
        receiverCity: el.receiver.city,
        receivingDate: el.receivingDate,
      };
    });
  }

  dateFormater(data: ValueFormatterParams): string {
    const res = new Date(data.value).toLocaleDateString('ru-RU');

    return res;
  }

  booleanFormater(data: ValueFormatterParams): string {
    const res = data.value ? 'да' : 'нет';

    return res;
  }
}
