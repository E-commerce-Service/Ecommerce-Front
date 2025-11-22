import {
   Component,
   CUSTOM_ELEMENTS_SCHEMA,
   ElementRef,
   Input,
   ViewChild,
} from '@angular/core';
import { CurrencyPipe, KeyValuePipe, NgOptimizedImage } from '@angular/common';
import { StarsComponent } from '../../../../shared/components/stars/stars.component';
import { OutlinedButtonComponent } from '../../../../shared/components/outlined-button/outlined-button.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { QuantityStepperComponent } from '../../../../shared/components/quantity-stepper/quantity-stepper.component';
import { ToRelativePathPipe } from '../../../../shared/pipes/to-relative-path.pipe';

import { register, SwiperContainer } from 'swiper/element/bundle';

import { Product } from '../../../../core/@types/Product';

register();

@Component({
   selector: 'app-product-details',
   imports: [
      NgOptimizedImage,
      StarsComponent,
      OutlinedButtonComponent,
      ButtonComponent,
      QuantityStepperComponent,
      ToRelativePathPipe,
      KeyValuePipe,
      CurrencyPipe,
   ],
   templateUrl: './product-details.component.html',
   styleUrl: './product-details.component.sass',
   schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductDetailsComponent {
   private _product!: Product;

   @Input({ required: true })
   set product(value: Product) {
      if (value) {
         this._product = value;
         setTimeout(() => this.initializeSwiper(), 0);
      }
   }

   get product(): Product {
      return this._product;
   }

   @ViewChild('mainSwiper') mainSwiper!: ElementRef<SwiperContainer>;
   @ViewChild('thumbsSwiper') thumbsSwiper!: ElementRef<SwiperContainer>;

   private initializeSwiper(): void {
      if (
         this.mainSwiper &&
         this.thumbsSwiper &&
         this.mainSwiper.nativeElement.swiper
      ) {
         const thumbsParams = {
            swiper: this.thumbsSwiper.nativeElement.swiper,
         };
         Object.assign(this.mainSwiper.nativeElement, { thumbs: thumbsParams });

         this.mainSwiper.nativeElement.swiper.update();
         this.thumbsSwiper.nativeElement.swiper.update();
      }
   }
}
