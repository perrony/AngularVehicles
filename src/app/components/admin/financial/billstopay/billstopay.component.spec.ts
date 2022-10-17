import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillstopayComponent } from './billstopay.component';

describe('BillstopayComponent', () => {
  let component: BillstopayComponent;
  let fixture: ComponentFixture<BillstopayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillstopayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillstopayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
