import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartFeature } from './cart.feature';

describe('CartFeature', () => {
   let component: CartFeature;
   let fixture: ComponentFixture<CartFeature>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         imports: [CartFeature],
      }).compileComponents();

      fixture = TestBed.createComponent(CartFeature);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
