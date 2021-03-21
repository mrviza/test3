import {
  Component,
  OnChanges,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { Delivery, FilterData } from '../app.d';
import {
  TableRowData,
  IRowSelectedEvent,
  IValueFormatterParams,
} from './grid-table.component.d';

@Component({
  selector: 'grid-table',
  templateUrl: './grid-table.component.html',
  styleUrls: ['./grid-table.component.scss'],
})
export class TableComponent implements OnChanges {
  @Input() data: Delivery[] = [];
  @Input() filter?: FilterData;
  @Output() rowSelectedEvent = new EventEmitter<Delivery>();

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
    const reducer = (acc: TableRowData[], el: Delivery, index: number) => {
      const value: TableRowData = {
        index,
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

      if (!this.filter) {
        acc.push(value);
        return acc;
      }

      const isNumberCorrect =
        !this.filter.number || this.filter.number === value.number;
      const isStatusCorrect =
        !this.filter.status || this.filter.status === value.status;
      const isTypeCorrect =
        !this.filter.type || this.filter.type === value.type;
      const isProblems = !this.filter.problems || value.problems;

      if (isNumberCorrect && isStatusCorrect && isTypeCorrect && isProblems) {
        acc.push(value);
      }

      return acc;
    };

    this.rowData = this.data.reduce(reducer, []);
  }

  rowSelected(event: IRowSelectedEvent<TableRowData>) {
    const index = event.data.index;
    const rowFullData = this.data[index];

    this.rowSelectedEvent.emit(rowFullData);
  }

  dateFormater(data: IValueFormatterParams<string>): string {
    const res = new Date(data.value).toLocaleDateString('ru-RU');

    return res;
  }

  booleanFormater(data: IValueFormatterParams<boolean>): string {
    const res = data.value ? 'да' : 'нет';

    return res;
  }
}
