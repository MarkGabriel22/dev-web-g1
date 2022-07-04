import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintsbookListComponent } from './complaintsbook-list.component';

describe('ComplaintsbookListComponent', () => {
  let component: ComplaintsbookListComponent;
  let fixture: ComponentFixture<ComplaintsbookListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplaintsbookListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplaintsbookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
