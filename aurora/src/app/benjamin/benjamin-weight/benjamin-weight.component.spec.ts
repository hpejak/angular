import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenjaminWeightComponent } from './benjamin-weight.component';

describe('BenjaminWeightComponent', () => {
  let component: BenjaminWeightComponent;
  let fixture: ComponentFixture<BenjaminWeightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenjaminWeightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BenjaminWeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
