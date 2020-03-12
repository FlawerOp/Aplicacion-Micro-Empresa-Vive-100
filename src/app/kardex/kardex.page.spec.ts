import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KardexPage } from './kardex.page';

describe('KardexPage', () => {
  let component: KardexPage;
  let fixture: ComponentFixture<KardexPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KardexPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KardexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
