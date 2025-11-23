import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { finalize } from 'rxjs';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
   selector: 'app-sign-in',
   imports: [CommonModule, ReactiveFormsModule, RouterLink],
   templateUrl: './sign-in.feature.html',
   styleUrl: './sign-in.feature.sass',
})
export class SignInFeature {
   private fb = inject(FormBuilder);
   private authService = inject(AuthService);
   private router = inject(Router);

   isLoading = false;
   errorMessage: string | null = null;

   loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
   });

   onSubmit(): void {
      this.loginForm.markAllAsTouched();
      if (this.loginForm.invalid) {
         return;
      }

      this.isLoading = true;
      this.errorMessage = null;

      const authData = {
         email: this.loginForm.value.email!,
         password: this.loginForm.value.password!,
      };

      this.authService
         .authenticate(authData)
         .pipe(finalize(() => (this.isLoading = false)))
         .subscribe({
            next: () => {
               this.router.navigate(['/']);
            },
            error: (err) => {
               this.errorMessage =
                  err.error?.message || 'Email ou senha inválidos.';
            },
         });
   }
}
