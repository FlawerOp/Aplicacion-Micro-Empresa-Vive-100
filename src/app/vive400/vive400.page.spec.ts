import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Vive400Page } from './vive400.page';

describe('Vive400Page', () => {
  let component: Vive400Page;
  let fixture: ComponentFixture<Vive400Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vive400Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vive400Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
