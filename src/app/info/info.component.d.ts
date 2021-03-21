export type DeliveryInfo = DeliveryStatus & DeliverySenderInfo & DeliveryDateInfo

export interface DeliveryStatus {
  status: string;
  qurrentPosition: string | null;
  receiverName: string;
  receiverPhone: string;
  courierName: string | null;
  courierPhone: string | null;
  note: string;
}

export interface DeliverySenderInfo {
  number: string;
  type: string;
  senderName: string;
  payerName: string;
}

export interface DeliveryDateInfo {
  sendingDate: string;
  receivingDate: string;
  storagePeriod: string | null;
}
