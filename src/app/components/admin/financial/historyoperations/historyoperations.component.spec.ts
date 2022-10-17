import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryoperationsComponent } from './historyoperations.component';

describe('HistoryoperationsComponent', () => {
  let component: HistoryoperationsComponent;
  let fixture: ComponentFixture<HistoryoperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryoperationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryoperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
