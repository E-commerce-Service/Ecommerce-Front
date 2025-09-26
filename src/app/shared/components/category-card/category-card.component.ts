import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
   selector: 'app-category-card',
   imports: [NgOptimizedImage, RouterLink],
   templateUrl: './category-card.component.html',
   styleUrl: './category-card.component.sass',
})
export class CategoryCardComponent {
   @Input() image!: string;
   @Input() alt!: string;
   @Input() label!: string;
   @Input() link!: string;
}
