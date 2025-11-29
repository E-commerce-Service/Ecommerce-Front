import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InteractiveStarsComponent } from '../interactive-stars/interactive-stars.component';
import { ButtonComponent } from '../button/button.component';

export interface ReviewData {
   rating: number;
   content: string;
}

@Component({
   selector: 'app-create-review-modal',
   imports: [FormsModule, InteractiveStarsComponent, ButtonComponent],
   templateUrl: './create-review-modal.component.html',
   styleUrl: './create-review-modal.component.sass',
})
export class CreateReviewModalComponent {
   @Output() modalClose = new EventEmitter<void>();
   @Output() submitReview = new EventEmitter<ReviewData>();

   rating = 0;
   content = '';

   ratingLabels: Record<number, string> = {
      1: 'Muito Ruim',
      2: 'Ruim',
      3: 'Ok',
      4: 'Bom',
      5: 'Excelente!',
   };

   onCloseModal(): void {
      this.modalClose.emit();
   }

   onRatingChanged(newRating: number): void {
      this.rating = newRating;
   }

   onSubmit(): void {
      if (this.rating > 0) {
         this.submitReview.emit({
            rating: this.rating,
            content: this.content.trim(),
         });
         this.onCloseModal();
      }
   }
}
