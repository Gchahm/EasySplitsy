export interface ReceiptItem {
  name: string;
  price: number;
  quantity: number;
}

export interface Receipt {
  items: ReceiptItem[];
  subtotal: number;
  tax: number;
  total: number;
  date: string;
  merchant: string;
}

export interface ReceiptResponse {
  ok: boolean;
  result: Receipt;
} 