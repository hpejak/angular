import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterConsumptionDetailsComponent } from './water-consumption-details.component';

describe('WaterConsumptionDetailsComponent', () => {
  let component: WaterConsumptionDetailsComponent;
  let fixture: ComponentFixture<WaterConsumptionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaterConsumptionDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaterConsumptionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
