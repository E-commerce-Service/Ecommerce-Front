import { Component, Input } from '@angular/core';
import { NgClass, NgOptimizedImage } from '@angular/common';

@Component({
   selector: 'app-outlined-button',
   imports: [NgClass, NgOptimizedImage],
   templateUrl: './outlined-button.component.html',
   styleUrl: './outlined-button.component.sass',
})
export class OutlinedButtonComponent {
   @Input() textColor!: string
   @Input() label!: string;
   @Input() icon!: string;
}
