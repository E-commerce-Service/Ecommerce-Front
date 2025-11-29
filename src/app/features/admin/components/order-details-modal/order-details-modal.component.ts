import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OrderShoppingResponse } from '../../../../core/@types/OrderShoppingResponse';
import { OrderStatus } from '../../../../core/enum/OrderStatus';
import { CurrencyPipe, DatePipe, NgClass } from '@angular/common';

@Component({
   selector: 'app-order-details-modal',
   imports: [CurrencyPipe, DatePipe, NgClass],
   templateUrl: './order-details-modal.component.html',
   styleUrl: './order-details-modal.component.sass',
})
export class OrderDetailsModalComponent {
   @Input({ required: true }) order!: OrderShoppingResponse;
   @Output() modalClose = new EventEmitter<void>();
   @Output() approve = new EventEmitter<number>();
   @Output() reject = new EventEmitter<number>();

   readonly OrderStatus = OrderStatus;

   calculateTotal(): number {
      return this.order.items.reduce(
         (acc, item) => acc + item.price * item.quantity,
         0,
      );
   }
}
