import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockvehiclesComponent } from './stockvehicles.component';

describe('StockvehiclesComponent', () => {
  let component: StockvehiclesComponent;
  let fixture: ComponentFixture<StockvehiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockvehiclesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockvehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
