import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Session5Component } from './session5.component';

describe('Session5Component', () => {
  let component: Session5Component;
  let fixture: ComponentFixture<Session5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Session5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Session5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
