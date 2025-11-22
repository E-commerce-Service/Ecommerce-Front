import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFeature } from './profile.feature';

describe('ProfileFeature', () => {
   let component: ProfileFeature;
   let fixture: ComponentFixture<ProfileFeature>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         imports: [ProfileFeature],
      }).compileComponents();

      fixture = TestBed.createComponent(ProfileFeature);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
