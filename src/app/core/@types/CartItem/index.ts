import { Product } from '../Product';
import { ItemStatus } from '../../enum/ItemStatus';

export interface CartItem {
   itemID: number;
   product: Product;
   quantity: number;
   price: number;
   status: ItemStatus;
}
