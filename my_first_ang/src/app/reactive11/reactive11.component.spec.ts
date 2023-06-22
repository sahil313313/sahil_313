import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reactive11Component } from './reactive11.component';

describe('Reactive11Component', () => {
  let component: Reactive11Component;
  let fixture: ComponentFixture<Reactive11Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Reactive11Component]
    });
    fixture = TestBed.createComponent(Reactive11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
