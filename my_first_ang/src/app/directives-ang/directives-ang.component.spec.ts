import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesAngComponent } from './directives-ang.component';

describe('DirectivesAngComponent', () => {
  let component: DirectivesAngComponent;
  let fixture: ComponentFixture<DirectivesAngComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectivesAngComponent]
    });
    fixture = TestBed.createComponent(DirectivesAngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
