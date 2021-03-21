import { RowSelectedEvent, ValueFormatterParams } from 'ag-grid-community';

export interface TableRowData {
  index: number;
  sendingDate: string;
  number: string;
  status: string;
  type: string;
  problems: boolean;
  responsible: string | null;
  senderCity: string;
  receiverCity: string;
  receivingDate: string;
}

export interface IRowSelectedEvent<T> extends RowSelectedEvent {
  data: T;
}

export interface IValueFormatterParams<T> extends ValueFormatterParams {
  value: T;
}
