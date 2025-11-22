import { Component, inject, Input } from '@angular/core';
import { CurrencyPipe, NgOptimizedImage } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { StarsComponent } from '../stars/stars.component';
import { ToRelativePathPipe } from '../../pipes/to-relative-path.pipe';
import { Product } from '../../../core/@types/Product';

@Component({
   selector: 'app-product-card',
   imports: [
      NgOptimizedImage,
      RouterLink,
      StarsComponent,
      ToRelativePathPipe,
      CurrencyPipe,
   ],
   templateUrl: './product-card.component.html',
   styleUrl: './product-card.component.sass',
})
export class ProductCardComponent {
   @Input({ required: true }) product!: Product;
   protected router = inject(Router);
}
