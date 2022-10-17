import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressCompanyComponent } from './address-company.component';

describe('AddressCompanyComponent', () => {
  let component: AddressCompanyComponent;
  let fixture: ComponentFixture<AddressCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressCompanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
