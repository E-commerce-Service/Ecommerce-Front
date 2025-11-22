import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
   selector: 'app-alert-modal',
   imports: [NgOptimizedImage],
   templateUrl: './alert-modal.component.html',
   styleUrl: './alert-modal.component.sass',
})
export class AlertModalComponent {
   @Input() title = 'Você tem certeza?';
   @Input() message = 'Esta ação não poderá ser desfeita.';
   @Input() confirmButtonText = 'Confirmar';
   @Input() cancelButtonText = 'Cancelar';

   @Output() alertClose = new EventEmitter<void>();
   @Output() confirm = new EventEmitter<void>();

   onClose(): void {
      this.alertClose.emit();
   }

   onConfirm(): void {
      this.confirm.emit();
   }
}
