export interface Order {
  id?: number;
  userId: number;
  orderProduct: string;
  productType: string;
  orderPrice: string;
  orderStatus: string;
  productCode: number;
  shippingAddress: string;
}
