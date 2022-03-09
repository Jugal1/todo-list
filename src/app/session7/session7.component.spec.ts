import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Session7Component } from './session7.component';

describe('Session7Component', () => {
  let component: Session7Component;
  let fixture: ComponentFixture<Session7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Session7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Session7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
