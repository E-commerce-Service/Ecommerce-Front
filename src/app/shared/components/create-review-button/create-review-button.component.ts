import { Component, EventEmitter, Output } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
   selector: 'app-create-review-button',
   imports: [NgOptimizedImage],
   templateUrl: './create-review-button.component.html',
   styleUrl: './create-review-button.component.sass',
})
export class CreateReviewButtonComponent {
   @Output() addReviewClick = new EventEmitter<void>();

   onAddReview(): void {
      this.addReviewClick.emit();
   }
}
