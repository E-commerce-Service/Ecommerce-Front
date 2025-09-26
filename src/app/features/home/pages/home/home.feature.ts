import {Component, inject, OnInit} from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CategoryCardComponent } from '../../../../shared/components/category-card/category-card.component';
import { CATEGORIES } from '../../../../core/navigation/categories.constant';
import { Product } from '../../../../core/@types/Product';
import { ProductCardComponent } from '../../../../shared/components/product-card/product-card.component';
import {ProductService} from '../../../../core/services/product.service';
import {catchError, map, Observable, of, startWith} from 'rxjs';
import {Pagination} from '../../../../core/@types/Pagination';
import {AsyncPipe} from '@angular/common';

@Component({
   selector: 'app-home-page',
   imports: [HeaderComponent, CategoryCardComponent, ProductCardComponent, AsyncPipe],
   templateUrl: './home.feature.html',
   styleUrl: './home.feature.sass',
})
export class HomeFeature implements OnInit {
   private productService = inject(ProductService);
   protected categories = CATEGORIES;

   private readonly initialPaginationState: Pagination<Product> = {
      data: [],
      pagination: {
         page: 0,
         pageSize: 0,
         totalElements: 0,
         totalPages: 0,
      },
   };

   productsState$!: Observable<{
      loading: boolean,
      products: Pagination<Product>,
      error: boolean,
      errorMessage: string
   }>;

   ngOnInit() {
      this.loadAllProducts();
   }

   loadAllProducts() {
      this.productsState$ = this.productService.getAllProducts().pipe(
         map(data => ({
            loading: false,
            products: data,
            error: false,
            errorMessage: '',
         })),
         startWith({
            loading: true,
            products: this.initialPaginationState,
            error: false,
            errorMessage: '',
         }),
         catchError(err => {
            return of({
               loading: false,
               products: this.initialPaginationState,
               error: true,
               errorMessage: err.message,
            });
         })
      );
   }
}
