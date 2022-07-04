import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercomplaintsbookListComponent } from './usercomplaintsbook-list.component';

describe('UsercomplaintsbookListComponent', () => {
  let component: UsercomplaintsbookListComponent;
  let fixture: ComponentFixture<UsercomplaintsbookListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsercomplaintsbookListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsercomplaintsbookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
