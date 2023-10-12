import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcuLaterComponent } from './calcu-later.component';

describe('CalcuLaterComponent', () => {
  let component: CalcuLaterComponent;
  let fixture: ComponentFixture<CalcuLaterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalcuLaterComponent]
    });
    fixture = TestBed.createComponent(CalcuLaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
