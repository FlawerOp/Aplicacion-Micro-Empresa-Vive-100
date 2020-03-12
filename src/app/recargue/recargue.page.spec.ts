import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecarguePage } from './recargue.page';

describe('RecarguePage', () => {
  let component: RecarguePage;
  let fixture: ComponentFixture<RecarguePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecarguePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecarguePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
