import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillstoreceiveComponent } from './billstoreceive.component';

describe('BillstoreceiveComponent', () => {
  let component: BillstoreceiveComponent;
  let fixture: ComponentFixture<BillstoreceiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillstoreceiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillstoreceiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
