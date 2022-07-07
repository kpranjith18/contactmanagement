import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClonecontactComponent } from './clonecontact.component';

describe('ClonecontactComponent', () => {
  let component: ClonecontactComponent;
  let fixture: ComponentFixture<ClonecontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClonecontactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClonecontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
