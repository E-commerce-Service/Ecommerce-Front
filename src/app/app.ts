import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { Observable } from 'rxjs';
import { Toast } from './core/@types/Toast';
import { AsyncPipe } from '@angular/common';
import { ToastComponent } from './shared/components/toast/toast.component';
import { ToastService } from './core/services/toast.service';
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
   standalone: true,
   selector: 'app-root',
   imports: [
      RouterOutlet,
      NavbarComponent,
      AsyncPipe,
      ToastComponent,
      FooterComponent,
   ],
   templateUrl: './app.html',
   styleUrl: './app.sass',
})
export class App {
   protected title = 'Ecommerce-Front';
   private toastService = inject(ToastService);

   toasts$: Observable<Toast[]> = this.toastService.getToasts();
}
