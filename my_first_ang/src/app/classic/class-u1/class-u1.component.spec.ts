import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassU1Component } from './class-u1.component';

describe('ClassU1Component', () => {
  let component: ClassU1Component;
  let fixture: ComponentFixture<ClassU1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassU1Component]
    });
    fixture = TestBed.createComponent(ClassU1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
