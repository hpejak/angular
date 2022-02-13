import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceIncomeComponent } from './finance-income.component';

describe('FinanceIncomeComponent', () => {
  let component: FinanceIncomeComponent;
  let fixture: ComponentFixture<FinanceIncomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceIncomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
