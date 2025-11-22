import { Component, Input } from '@angular/core';

@Component({
   selector: 'app-loading-container',
   imports: [],
   templateUrl: './loading-container.component.html',
   styleUrl: './loading-container.component.sass',
})
export class LoadingContainerComponent {
   @Input({ required: true }) message!: string;
}
