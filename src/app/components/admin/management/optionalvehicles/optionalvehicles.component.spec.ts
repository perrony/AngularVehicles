import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionalvehiclesComponent } from './optionalvehicles.component';

describe('OptionalvehiclesComponent', () => {
  let component: OptionalvehiclesComponent;
  let fixture: ComponentFixture<OptionalvehiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionalvehiclesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionalvehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
