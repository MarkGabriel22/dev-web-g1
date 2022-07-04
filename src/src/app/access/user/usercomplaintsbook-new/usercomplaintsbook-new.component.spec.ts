import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercomplaintsbookNewComponent } from './usercomplaintsbook-new.component';

describe('UsercomplaintsbookNewComponent', () => {
  let component: UsercomplaintsbookNewComponent;
  let fixture: ComponentFixture<UsercomplaintsbookNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsercomplaintsbookNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsercomplaintsbookNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
