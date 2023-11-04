import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WardenResolveComplaintsComponent } from './warden-resolve-complaints.component';

describe('WardenResolveComplaintsComponent', () => {
  let component: WardenResolveComplaintsComponent;
  let fixture: ComponentFixture<WardenResolveComplaintsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WardenResolveComplaintsComponent]
    });
    fixture = TestBed.createComponent(WardenResolveComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
