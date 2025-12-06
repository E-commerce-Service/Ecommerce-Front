import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { CategoryService } from '../../../../core/services/category.service';
import { catchError, map, Observable, of, startWith } from 'rxjs';


interface CategoryCardData {
   image: string;
   alt: string;
   label: string;
   link: string;
}

@Component({
   selector: 'app-category-sidebar',
   imports: [RouterLink, RouterLinkActive, AsyncPipe],
   templateUrl: './category-sidebar.component.html',
   styleUrl: './category-sidebar.component.sass',
})
export class CategorySidebarComponent implements OnInit {
   private categoryService = inject(CategoryService);

   categoriesState$!: Observable<{
      loading: boolean;
      categories: CategoryCardData[];
      error: boolean;
      errorMessage: string;
   }>;

   ngOnInit() {
      this.loadCategories();
   }

   loadCategories(): void {
      this.categoriesState$ = this.categoryService.getCategories(0, 100).pipe(
         map((response) => {
            const mappedCategories: CategoryCardData[] = response.data.map(
               (cat) => ({
                  image: cat.imageUrl,
                  label: cat.name,
                  alt: cat.description || cat.name,
                  link: `/category/${cat.name}`,
               }),
            );

            return {
               loading: false,
               categories: mappedCategories,
               error: false,
               errorMessage: '',
            };
         }),
         startWith({
            loading: true,
            categories: [],
            error: false,
            errorMessage: '',
         }),
         catchError((err) => {
            return of({
               loading: false,
               categories: [],
               error: true,
               errorMessage: err.message || 'Erro ao carregar categorias',
            });
         }),
      );
   }
}
