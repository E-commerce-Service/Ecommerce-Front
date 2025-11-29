import { CartItem } from '../CartItem';

export interface Cart {
   cartID: number;
   items: CartItem[];
   totalPrice: number;
}
