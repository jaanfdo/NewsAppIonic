import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsCountryPage } from './news-country.page';

describe('NewsCountryPage', () => {
  let component: NewsCountryPage;
  let fixture: ComponentFixture<NewsCountryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsCountryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsCountryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
