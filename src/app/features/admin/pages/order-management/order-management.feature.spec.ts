import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderManagementFeature } from './order-management.feature';

describe('OrderManagementFeature', () => {
   let component: OrderManagementFeature;
   let fixture: ComponentFixture<OrderManagementFeature>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         imports: [OrderManagementFeature],
      }).compileComponents();

      fixture = TestBed.createComponent(OrderManagementFeature);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
