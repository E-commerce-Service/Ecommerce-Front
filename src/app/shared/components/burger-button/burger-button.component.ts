import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
   selector: 'app-burger-button',
   imports: [NgClass],
   templateUrl: './burger-button.component.html',
   styleUrl: './burger-button.component.sass',
})
export class BurgerButtonComponent {
   @Input() isOpen = false;
   @Output() toggleChange = new EventEmitter<void>();

   onClick() {
      this.toggleChange.emit();
   }
}
