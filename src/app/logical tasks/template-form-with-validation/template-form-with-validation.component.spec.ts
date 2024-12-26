import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFormWithValidationComponent } from './template-form-with-validation.component';

describe('TemplateFormWithValidationComponent', () => {
  let component: TemplateFormWithValidationComponent;
  let fixture: ComponentFixture<TemplateFormWithValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateFormWithValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateFormWithValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
