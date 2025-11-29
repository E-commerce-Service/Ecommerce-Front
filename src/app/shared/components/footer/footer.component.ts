import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
   selector: 'app-footer',
   imports: [RouterLink, NgOptimizedImage],
   templateUrl: './footer.component.html',
   styleUrl: './footer.component.sass',
})
export class FooterComponent {
   currentYear = new Date().getFullYear();
}
