import { OrderItemResponse } from '../OrderItemResponse';
import { OrderStatus } from '../../enum/OrderStatus';
import { OrderUserResponse } from '../OrderUserResponse';

export interface OrderShoppingResponse {
   orderId: number;
   items: OrderItemResponse[];
   orderStatus: OrderStatus;
   createdAt: string;
   user: OrderUserResponse;
}
