import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
   selector: 'app-interactive-stars',
   imports: [NgClass],
   templateUrl: './interactive-stars.component.html',
   styleUrl: './interactive-stars.component.sass',
})
export class InteractiveStarsComponent {
   @Input() rating = 0;
   @Output() ratingChange = new EventEmitter<number>();

   hoverRating = 0;
   stars = [1, 2, 3, 4, 5];

   setRating(newRating: number): void {
      this.rating = newRating;
      this.ratingChange.emit(this.rating);
   }

   setHoverRating(hoveredRating: number): void {
      this.hoverRating = hoveredRating;
   }
}
