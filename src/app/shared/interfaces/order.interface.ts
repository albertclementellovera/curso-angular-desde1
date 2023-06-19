export interface Details {
  productId: Number;
  productName: string;
  quantity: Number;
}

export interface Order {
  name: string;
  shippingAddress: string;
  city: string;
  date: string;
  isDelivery: boolean;
  id: Number;
}

export interface DetailsOrder {
  details: Details[];
  orderId: Number;
}
