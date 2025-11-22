import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractiveStarsComponent } from './interactive-stars.component';

describe('InteractiveStarsComponent', () => {
   let component: InteractiveStarsComponent;
   let fixture: ComponentFixture<InteractiveStarsComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         imports: [InteractiveStarsComponent],
      }).compileComponents();

      fixture = TestBed.createComponent(InteractiveStarsComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
