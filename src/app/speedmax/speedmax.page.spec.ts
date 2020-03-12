import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedmaxPage } from './speedmax.page';

describe('SpeedmaxPage', () => {
  let component: SpeedmaxPage;
  let fixture: ComponentFixture<SpeedmaxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeedmaxPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeedmaxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
