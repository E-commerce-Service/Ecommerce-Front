import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CategorySidebarComponent } from '../../components/category-sidebar/category-sidebar.component';

@Component({
   selector: 'app-category-layout',
   imports: [RouterOutlet, CategorySidebarComponent],
   templateUrl: './category-layout.component.html',
   styleUrl: './category-layout.component.sass',
})
export class CategoryLayoutComponent {}
