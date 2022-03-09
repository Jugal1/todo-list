import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Session9Component } from './session9.component';

describe('Session9Component', () => {
  let component: Session9Component;
  let fixture: ComponentFixture<Session9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Session9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Session9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
