import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclecolorsComponent } from './vehiclecolors.component';

describe('VehiclecolorsComponent', () => {
  let component: VehiclecolorsComponent;
  let fixture: ComponentFixture<VehiclecolorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiclecolorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiclecolorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
