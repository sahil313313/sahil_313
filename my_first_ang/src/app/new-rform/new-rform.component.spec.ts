import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRformComponent } from './new-rform.component';

describe('NewRformComponent', () => {
  let component: NewRformComponent;
  let fixture: ComponentFixture<NewRformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewRformComponent]
    });
    fixture = TestBed.createComponent(NewRformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
