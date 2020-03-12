import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescargueproductoPage } from './descargueproducto.page';

describe('DescargueproductoPage', () => {
  let component: DescargueproductoPage;
  let fixture: ComponentFixture<DescargueproductoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescargueproductoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescargueproductoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
