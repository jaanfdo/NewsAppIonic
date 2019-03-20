import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsOnePage } from './news-one.page';

describe('NewsOnePage', () => {
  let component: NewsOnePage;
  let fixture: ComponentFixture<NewsOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsOnePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
