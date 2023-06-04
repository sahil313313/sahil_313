import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LndingComponent } from './lnding.component';

describe('LndingComponent', () => {
  let component: LndingComponent;
  let fixture: ComponentFixture<LndingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LndingComponent]
    });
    fixture = TestBed.createComponent(LndingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
