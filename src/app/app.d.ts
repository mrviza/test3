export interface Delivery {
  sendingDate: string;
  receivingDate: string;
  departureDetails: DepartureDetails;
  status: string;
  type: string;
  problems: boolean;
  responsible: string | null;
  sender: Sender;
  receiver: Receiver;
}

interface DepartureDetails {
  number: string;
  qurrentPosition: string | null;
  courierName: string | null;
  courierPhone: string | null;
  note: string;
  storagePeriod: string | null;
  payerName: string;
}

interface Sender {
  name: string;
  city: string;
}

interface Receiver extends Sender {
  phoneNumber: string;
}

export interface DeliveryImportData {
  items: string[];
}

export interface FilterData {
  number?: string;
  type?: string;
  status?: string;
  problems?: boolean;
}
