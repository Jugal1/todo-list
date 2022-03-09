import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Session11Component } from './session11.component';

describe('Session11Component', () => {
  let component: Session11Component;
  let fixture: ComponentFixture<Session11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Session11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Session11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
