import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
   selector: 'app-quantity-stepper',
   imports: [FormsModule],
   templateUrl: './quantity-stepper.component.html',
   styleUrl: './quantity-stepper.component.sass',
})
export class QuantityStepperComponent implements OnInit {
   @Input() stock = 0;
   @Input() initialValue = 1;
   @Output() quantityChange = new EventEmitter<number>();

   quantity = 1;

   ngOnInit() {
      this.quantity = this.initialValue;
   }

   increment() {
      if (this.quantity < this.stock) {
         this.quantity++;
         this.quantityChange.emit(this.quantity);
      }
   }

   decrement() {
      if (this.quantity > 1) {
         this.quantity--;
         this.quantityChange.emit(this.quantity);
      }
   }

   onQuantityInput(event: Event) {
      const inputElement = event.target as HTMLInputElement;
      let value = parseInt(inputElement.value, 10);

      if (isNaN(value) || value < 1) {
         value = 1;
      } else if (value > this.stock) {
         value = this.stock;
      }

      this.quantity = value;
      inputElement.value = this.quantity.toString();

      this.quantityChange.emit(this.quantity);
   }

   preventMinus(event: KeyboardEvent) {
      if (event.key === '-' || event.key === 'e') {
         event.preventDefault();
      }
   }
}
