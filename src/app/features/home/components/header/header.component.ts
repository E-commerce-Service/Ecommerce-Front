import { Component, EventEmitter, Output } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
   selector: 'app-header',
   imports: [NgOptimizedImage],
   templateUrl: './header.component.html',
   styleUrl: './header.component.sass',
})
export class HeaderComponent {
   protected phone = 'assets/images/phone.svg';
   protected phoneAlt = 'Phone';
   currentYear = new Date().getFullYear();

   @Output() navigateToProducts = new EventEmitter<void>();

   onButtonClick() {
      this.navigateToProducts.emit();
   }
}
