import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaempleadoPage } from './diaempleado.page';

describe('DiaempleadoPage', () => {
  let component: DiaempleadoPage;
  let fixture: ComponentFixture<DiaempleadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaempleadoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaempleadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
