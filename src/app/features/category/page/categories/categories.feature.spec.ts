import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesFeature } from './categories.feature';

describe('CategoriesFeature', () => {
   let component: CategoriesFeature;
   let fixture: ComponentFixture<CategoriesFeature>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         imports: [CategoriesFeature],
      }).compileComponents();

      fixture = TestBed.createComponent(CategoriesFeature);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
