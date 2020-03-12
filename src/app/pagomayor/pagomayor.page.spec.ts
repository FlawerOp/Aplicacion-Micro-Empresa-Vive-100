import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagomayorPage } from './pagomayor.page';

describe('PagomayorPage', () => {
  let component: PagomayorPage;
  let fixture: ComponentFixture<PagomayorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagomayorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagomayorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
