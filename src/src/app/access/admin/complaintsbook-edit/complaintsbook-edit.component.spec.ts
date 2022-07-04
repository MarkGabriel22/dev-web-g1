import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintsbookEditComponent } from './complaintsbook-edit.component';

describe('ComplaintsbookEditComponent', () => {
  let component: ComplaintsbookEditComponent;
  let fixture: ComponentFixture<ComplaintsbookEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplaintsbookEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplaintsbookEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
