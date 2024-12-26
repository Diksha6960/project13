import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineEditingWithValidationComponent } from './inline-editing-with-validation.component';

describe('InlineEditingWithValidationComponent', () => {
  let component: InlineEditingWithValidationComponent;
  let fixture: ComponentFixture<InlineEditingWithValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlineEditingWithValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineEditingWithValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
