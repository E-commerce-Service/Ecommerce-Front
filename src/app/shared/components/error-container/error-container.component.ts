import { Component, Input } from '@angular/core';

@Component({
   selector: 'app-error-container',
   imports: [],
   templateUrl: './error-container.component.html',
   styleUrl: './error-container.component.sass',
})
export class ErrorContainerComponent {
   @Input({ required: true }) errorMessage!: string;
}
