import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { NAV_PATHS } from '../../../core/navigation/navigation.constant';
import { NgClass, NgOptimizedImage } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
   selector: 'app-hide-menu',
   imports: [NgOptimizedImage, RouterLink, RouterLinkActive, NgClass],
   templateUrl: './hide-menu.component.html',
   styleUrl: './hide-menu.component.sass',
})
export class HideMenuComponent {
   private authService = inject(AuthService);
   protected logo = 'assets/images/logo.svg';
   protected cart = 'assets/images/cart.svg';
   protected profile = 'assets/images/profile.svg';
   protected logoAlt = 'Logo';
   protected cartAlt = 'Cart';
   protected profileAlt = 'Profile';
   protected navPaths = NAV_PATHS;

   protected isLogged = this.authService.isLogged;
   protected userInitials = this.authService.userInitials;

   @Input() isOpen = false;

   @Input() isAdmin = false;
   @Input() profileLink = '/sign-in';
   @Input() profileTitle = 'Sign In';

   @Output() menuClose = new EventEmitter<void>();

   closeMenu() {
      this.menuClose.emit();
   }
}
