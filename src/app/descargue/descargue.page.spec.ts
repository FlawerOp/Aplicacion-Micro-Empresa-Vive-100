import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescarguePage } from './descargue.page';

describe('DescarguePage', () => {
  let component: DescarguePage;
  let fixture: ComponentFixture<DescarguePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescarguePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescarguePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
