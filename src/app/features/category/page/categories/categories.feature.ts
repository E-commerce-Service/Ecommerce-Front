import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import {
   BehaviorSubject,
   catchError,
   combineLatest,
   debounceTime,
   distinctUntilChanged,
   map,
   Observable,
   of,
   startWith,
   switchMap,
   tap,
} from 'rxjs';

import { ProductService } from '../../../../core/services/product.service';
import { CategoryService } from '../../../../core/services/category.service';
import { Product } from '../../../../core/@types/Product';
import { Pagination } from '../../../../core/@types/Pagination';
import { ProductCardComponent } from '../../../../shared/components/product-card/product-card.component';
import { LoadingContainerComponent } from '../../../../shared/components/loading-container/loading-container.component';
import { SortBy } from '../../../../core/enum/SortBy';
import { SortDirection } from '../../../../core/enum/SortDirection';

interface FilterState {
   page: number;
   size: number;
   name: string;
   sortBy?: SortBy;
   sortDirection?: SortDirection;
}

@Component({
   selector: 'app-categories',
   imports: [
      ProductCardComponent,
      AsyncPipe,
      LoadingContainerComponent,
      RouterLink,
      ReactiveFormsModule,
   ],
   templateUrl: './categories.feature.html',
   styleUrl: './categories.feature.sass',
})
export class CategoriesFeature implements OnInit {
   private route = inject(ActivatedRoute);
   private productService = inject(ProductService);
   private categoryService = inject(CategoryService);

   searchControl = new FormControl('');
   sortControl = new FormControl<SortBy | null>(null);
   directionControl = new FormControl<SortDirection>(SortDirection.ASC);

   readonly SortBy = SortBy;
   readonly SortDirection = SortDirection;

   private initialFilterState: FilterState = {
      page: 0,
      size: 15,
      name: '',
      sortBy: undefined,
      sortDirection: SortDirection.ASC,
   };

   private filterSubject = new BehaviorSubject<FilterState>(
      this.initialFilterState,
   );

   state$!: Observable<{
      categoryName: string;
      products: Product[];
      pagination: Pagination<Product>['pagination'];
      loading: boolean;
      error: boolean;
      found: boolean;
   }>;

   ngOnInit(): void {
      this.setupFilterListeners();

      this.state$ = this.route.paramMap.pipe(
         tap(() => {
            this.resetFilters();
         }),
         switchMap((params) => {
            const urlCategoryName = params.get('category');

            if (!urlCategoryName) {
               return this.filterSubject.pipe(
                  switchMap((filters) =>
                     this.productService
                        .getAllProducts(
                           filters.sortBy,
                           filters.sortDirection,
                           filters.name,
                           undefined,
                           filters.page,
                           filters.size,
                        )
                        .pipe(
                           map((prodResponse) => ({
                              categoryName: 'Todos os Produtos',
                              products: prodResponse.data,
                              pagination: prodResponse.pagination,
                              loading: false,
                              error: false,
                              found: true,
                           })),
                        ),
                  ),
                  startWith({
                     categoryName: 'Todos os Produtos',
                     products: [],
                     pagination: {
                        page: 0,
                        size: 0,
                        totalElements: 0,
                        totalPages: 0,
                     },
                     loading: true,
                     error: false,
                     found: true,
                  }),
               );
            }

            return this.categoryService
               .getCategories(0, 1, urlCategoryName)
               .pipe(
                  switchMap((catResponse) => {
                     if (catResponse.data.length > 0) {
                        const category = catResponse.data[0];

                        return this.filterSubject.pipe(
                           switchMap((filters) =>
                              this.productService
                                 .getAllProducts(
                                    filters.sortBy,
                                    filters.sortDirection,
                                    filters.name,
                                    category.id,
                                    filters.page,
                                    filters.size,
                                 )
                                 .pipe(
                                    map((prodResponse) => ({
                                       categoryName: category.name,
                                       products: prodResponse.data,
                                       pagination: prodResponse.pagination,
                                       loading: false,
                                       error: false,
                                       found: true,
                                    })),
                                 ),
                           ),
                           startWith({
                              categoryName: category.name,
                              products: [],
                              pagination: {
                                 page: 0,
                                 size: 0,
                                 totalElements: 0,
                                 totalPages: 0,
                              },
                              loading: true,
                              error: false,
                              found: true,
                           }),
                        );
                     }

                     return of({
                        categoryName: urlCategoryName,
                        products: [],
                        pagination: {
                           page: 0,
                           size: 0,
                           totalElements: 0,
                           totalPages: 0,
                        },
                        loading: false,
                        error: false,
                        found: false,
                     });
                  }),
                  catchError(() =>
                     of({
                        categoryName: urlCategoryName,
                        products: [],
                        pagination: {
                           page: 0,
                           size: 0,
                           totalElements: 0,
                           totalPages: 0,
                        },
                        loading: false,
                        error: true,
                        found: false,
                     }),
                  ),
               );
         }),
      );
   }

   setupFilterListeners() {
      this.searchControl.valueChanges
         .pipe(debounceTime(400), distinctUntilChanged())
         .subscribe((term) => {
            const current = this.filterSubject.value;
            this.filterSubject.next({ ...current, name: term || '', page: 0 });
         });

      combineLatest([
         this.sortControl.valueChanges,
         this.directionControl.valueChanges,
      ]).subscribe(([sort, dir]) => {
         const current = this.filterSubject.value;
         this.filterSubject.next({
            ...current,
            sortBy: sort || undefined,
            sortDirection: dir || SortDirection.ASC,
            page: 0,
         });
      });
   }

   resetFilters() {
      this.searchControl.setValue('', { emitEvent: false });
      this.sortControl.setValue(null, { emitEvent: false });
      this.directionControl.setValue(SortDirection.ASC, { emitEvent: false });
      this.filterSubject.next(this.initialFilterState);
   }

   nextPage(current: number, total: number) {
      if (current < total - 1) {
         const currentFilters = this.filterSubject.value;
         this.filterSubject.next({ ...currentFilters, page: current + 1 });
         this.scrollToTop();
      }
   }

   prevPage(current: number) {
      if (current > 0) {
         const currentFilters = this.filterSubject.value;
         this.filterSubject.next({ ...currentFilters, page: current - 1 });
         this.scrollToTop();
      }
   }

   private scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
   }
}
