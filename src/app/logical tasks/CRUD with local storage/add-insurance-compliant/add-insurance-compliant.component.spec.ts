import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInsuranceCompliantComponent } from './add-insurance-compliant.component';

describe('AddInsuranceCompliantComponent', () => {
  let component: AddInsuranceCompliantComponent;
  let fixture: ComponentFixture<AddInsuranceCompliantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddInsuranceCompliantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInsuranceCompliantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
