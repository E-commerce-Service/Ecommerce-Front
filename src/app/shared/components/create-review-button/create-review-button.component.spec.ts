import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateReviewButtonComponent } from './create-review-button.component';

describe('CreateReviewButtonComponent', () => {
   let component: CreateReviewButtonComponent;
   let fixture: ComponentFixture<CreateReviewButtonComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         imports: [CreateReviewButtonComponent],
      }).compileComponents();

      fixture = TestBed.createComponent(CreateReviewButtonComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
