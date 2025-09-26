import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
   selector: 'app-quantity-stepper',
   imports: [FormsModule],
   templateUrl: './quantity-stepper.component.html',
   styleUrl: './quantity-stepper.component.sass',
})
export class QuantityStepperComponent {
   quantity = 1;
   @Input() stock = 0;

   increment() {
      this.quantity++;
   }

   decrement() {
      if (this.quantity > 1) {
         this.quantity--;
      }
   }

   preventMinus(event: KeyboardEvent) {
      if (event.key === '-' || event.key === 'Subtract') {
         event.preventDefault();
      }
   }

   onQuantityInput(event: Event) {
      const input = event.target as HTMLInputElement;
      const raw = input.value;
      const val = Number(raw);

      if (val < 1 || raw === '') {
         input.value = this.quantity.toString();
         return;
      }

      if (val > this.stock) {
         input.value = this.stock.toString();
         this.quantity = this.stock;
         return;
      }

      if (val < 0) {
         input.value = this.stock.toString();
         this.quantity = 0;
         return;
      }

      this.quantity = val;
   }
}
