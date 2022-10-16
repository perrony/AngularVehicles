import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HometoolbarComponent } from './hometoolbar.component';

describe('AdmintoolbarComponent', () => {
  let component: HometoolbarComponent;
  let fixture: ComponentFixture<HometoolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HometoolbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HometoolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
