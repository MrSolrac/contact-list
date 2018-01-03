import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchContactInfoComponent } from './search-contact-info.component';

describe('SearchContactInfoComponent', () => {
  let component: SearchContactInfoComponent;
  let fixture: ComponentFixture<SearchContactInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchContactInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchContactInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
