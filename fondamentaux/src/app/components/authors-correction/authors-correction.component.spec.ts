import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsCorrectionComponent } from './authors-correction.component';

describe('AuthorsCorrectionComponent', () => {
  let component: AuthorsCorrectionComponent;
  let fixture: ComponentFixture<AuthorsCorrectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorsCorrectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorsCorrectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
