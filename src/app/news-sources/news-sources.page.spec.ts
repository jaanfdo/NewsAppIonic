import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsSourcesPage } from './news-sources.page';

describe('NewsSourcesPage', () => {
  let component: NewsSourcesPage;
  let fixture: ComponentFixture<NewsSourcesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsSourcesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsSourcesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
