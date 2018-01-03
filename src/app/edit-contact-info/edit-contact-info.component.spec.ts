import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditContractInfoComponent } from './edit-contact-info.component';

describe('EditContractInfoComponent', () => {
  let component: EditContractInfoComponent;
  let fixture: ComponentFixture<EditContractInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditContractInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditContractInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
