import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpFeature } from './sign-up.feature';

describe('SignUpFeature', () => {
   let component: SignUpFeature;
   let fixture: ComponentFixture<SignUpFeature>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         imports: [SignUpFeature],
      }).compileComponents();

      fixture = TestBed.createComponent(SignUpFeature);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
