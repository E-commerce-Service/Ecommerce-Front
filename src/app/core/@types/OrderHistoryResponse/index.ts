import { OrderItemResponse } from '../OrderItemResponse';
import { OrderStatus } from '../../enum/OrderStatus';

export interface OrderHistoryResponse {
   orderId: number;
   orderStatus: OrderStatus;
   items: OrderItemResponse[];
   totalPrice: number;
   createdAt: string;
}
