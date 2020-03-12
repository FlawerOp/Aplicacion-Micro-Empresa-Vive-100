import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FDiaPage } from './f-dia.page';

describe('FDiaPage', () => {
  let component: FDiaPage;
  let fixture: ComponentFixture<FDiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FDiaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FDiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
