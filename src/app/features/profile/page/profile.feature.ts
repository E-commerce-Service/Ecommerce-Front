import { Component, inject } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { DatePipe, NgClass } from '@angular/common';

@Component({
   selector: 'app-page',
   imports: [NgClass, DatePipe],
   templateUrl: './profile.feature.html',
   styleUrl: './profile.feature.sass',
})
export class ProfileFeature {
   private authService = inject(AuthService);
   private router = inject(Router);

   currentUser = this.authService.currentUser;

   protected userInitials = this.authService.userInitials;

   logout(): void {
      this.authService.logout().subscribe({
         next: () => {
            this.router.navigate(['/']);
         },
      });
   }
}
