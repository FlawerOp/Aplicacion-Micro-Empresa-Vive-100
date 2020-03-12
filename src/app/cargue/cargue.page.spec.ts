import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarguePage } from './cargue.page';

describe('CarguePage', () => {
  let component: CarguePage;
  let fixture: ComponentFixture<CarguePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarguePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarguePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
