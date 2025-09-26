import {
   AfterViewInit,
   Component,
   CUSTOM_ELEMENTS_SCHEMA,
   ElementRef,
   inject,
   OnInit,
   PLATFORM_ID,
   ViewChild
} from '@angular/core';
import {isPlatformBrowser, KeyValuePipe, NgOptimizedImage} from '@angular/common';
import { Product } from '../../../../core/@types/Product';
import { ActivatedRoute } from '@angular/router';
import { StarsComponent } from '../../../../shared/components/stars/stars.component';
import { OutlinedButtonComponent } from '../../../../shared/components/outlined-button/outlined-button.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { QuantityStepperComponent } from '../../../../shared/components/quantity-stepper/quantity-stepper.component';
import {ProductService} from '../../../../core/services/product.service';
import {ToRelativePathPipe} from '../../../../shared/pipes/to-relative-path.pipe';

import {register, SwiperContainer} from 'swiper/element/bundle';
import {SwiperOptions} from 'swiper/types';

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
   ],
   standalone: true,
   templateUrl: './product-details.component.html',
   styleUrl: './product-details.component.sass',
   schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class ProductDetailsComponent implements OnInit, AfterViewInit {
   protected productId = '';
   protected product: Product = {} as Product;
   protected route = inject(ActivatedRoute)
   protected productService = inject(ProductService);

   @ViewChild('mainSwiper') mainSwiper!: ElementRef<SwiperContainer>;
   @ViewChild('thumbsSwiper') thumbsSwiper!: ElementRef<SwiperContainer>;

   ngOnInit(): void {
      this.productId = this.route.snapshot.paramMap.get('id')!;
      this.productService.getProductById(this.productId).subscribe(data => {
         this.product = data;
      })
   }

   ngAfterViewInit(): void {
      if (this.mainSwiper && this.thumbsSwiper) {
         const thumbsParams = {
            swiper: this.thumbsSwiper.nativeElement.swiper,
         };
         Object.assign(this.mainSwiper.nativeElement, { thumbs: thumbsParams });
      }
   }
}
