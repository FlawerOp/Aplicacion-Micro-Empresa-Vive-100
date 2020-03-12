import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viv100Page } from './viv100.page';

describe('Viv100Page', () => {
  let component: Viv100Page;
  let fixture: ComponentFixture<Viv100Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viv100Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viv100Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
