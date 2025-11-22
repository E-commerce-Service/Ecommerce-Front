import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';

@Component({
   selector: 'app-reply-form',
   imports: [FormsModule, NgOptimizedImage],
   templateUrl: './reply-form.component.html',
   styleUrl: './reply-form.component.sass',
})
export class ReplyFormComponent implements OnInit {
   @Input() mentionUser: string | null = null;
   @Output() submitReply = new EventEmitter<string>();
   @Output() cancelReply = new EventEmitter<void>();

   replyContent = '';

   ngOnInit(): void {
      if (this.mentionUser) {
         this.replyContent = `@${this.mentionUser} `;
      }
   }

   handleSubmit(): void {
      if (this.replyContent.trim().length > 0) {
         this.submitReply.emit(this.replyContent);
         this.replyContent = '';
      }
   }

   handleCancel(): void {
      this.cancelReply.emit();
   }
}
