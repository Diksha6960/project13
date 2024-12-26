import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceCompliantComponent } from './insurance-compliant.component';

describe('InsuranceCompliantComponent', () => {
  let component: InsuranceCompliantComponent;
  let fixture: ComponentFixture<InsuranceCompliantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsuranceCompliantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceCompliantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
