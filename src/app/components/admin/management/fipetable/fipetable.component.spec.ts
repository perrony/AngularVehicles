import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FipetableComponent } from './fipetable.component';

describe('FipetableComponent', () => {
  let component: FipetableComponent;
  let fixture: ComponentFixture<FipetableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FipetableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FipetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
