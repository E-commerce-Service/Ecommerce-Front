import {
   Component,
   computed,
   HostListener,
   inject,
   OnDestroy,
} from '@angular/core';
import { NgClass, NgOptimizedImage } from '@angular/common';
import { NAV_PATHS } from '../../../core/navigation/navigation.constant';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HideMenuComponent } from '../hide-menu/hide-menu.component';
import { BurgerButtonComponent } from '../burger-button/burger-button.component';
import { AuthService } from '../../../core/services/auth.service';
import { UserType } from '../../../core/enum/UserType';

@Component({
   selector: 'app-navbar',
   imports: [
      RouterLink,
      RouterLinkActive,
      HideMenuComponent,
      BurgerButtonComponent,
      NgClass,
      NgOptimizedImage,
   ],
   templateUrl: './navbar.component.html',
   styleUrl: './navbar.component.sass',
})
export class NavbarComponent implements OnDestroy {
   protected logo = 'assets/images/logo.svg';
   protected cart = 'assets/images/cart.svg';
   protected profile = 'assets/images/profile.svg';
   protected logoAlt = 'Logo';
   protected cartAlt = 'Cart';
   protected profileAlt = 'Profile';
   protected navPaths = NAV_PATHS;
   private authService = inject(AuthService);

   protected isOpen = false;

   toggleMenu() {
      this.isOpen = !this.isOpen;
   }

   private currentScroll = 0;
   protected isScrolling = false;
   private scrollTimeout!: ReturnType<typeof setTimeout>;

   @HostListener('window:scroll', [])
   onWindowScroll() {
      this.currentScroll =
         window.pageYOffset ||
         document.documentElement.scrollTop ||
         document.body.scrollTop ||
         0;
      if (this.currentScroll >= 450 && !this.isOpen) {
         this.isScrolling = true;

         clearTimeout(this.scrollTimeout);

         this.scrollTimeout = setTimeout(() => {
            this.isScrolling = false;
         }, 800);
      }
   }

   protected userInitials = this.authService.userInitials;

   protected isAdmin = computed(() => {
      const currentUser = this.authService.currentUser();
      return currentUser?.userType === UserType.ADMIN;
   });

   protected isLogged = this.authService.isLogged;

   protected profileLink = computed(() => {
      return this.isLogged() ? '/profile' : '/sign-in';
   });

   protected profileTitle = computed(() => {
      return this.isLogged() ? 'Navegar para perfil' : 'Navegar para login';
   });

   ngOnDestroy() {
      clearTimeout(this.scrollTimeout);
   }
}
