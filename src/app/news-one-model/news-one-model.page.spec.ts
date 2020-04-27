import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsOneModelPage } from './news-one-model.page';

describe('NewsOneModelPage', () => {
  let component: NewsOneModelPage;
  let fixture: ComponentFixture<NewsOneModelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsOneModelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsOneModelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
