import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CocaPage } from './coca.page';

describe('CocaPage', () => {
  let component: CocaPage;
  let fixture: ComponentFixture<CocaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CocaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CocaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
