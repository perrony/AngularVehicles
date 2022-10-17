import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleregistrationComponent } from './vehicleregistration.component';

describe('VehicleregistrationComponent', () => {
  let component: VehicleregistrationComponent;
  let fixture: ComponentFixture<VehicleregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleregistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
