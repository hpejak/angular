import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceIncomeCatComponent } from './finance-income-cat.component';

describe('FinanceIncomeCatComponent', () => {
  let component: FinanceIncomeCatComponent;
  let fixture: ComponentFixture<FinanceIncomeCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceIncomeCatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceIncomeCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
