import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddpropertyComponent } from './admin-addproperty.component';

describe('AdminAddpropertyComponent', () => {
  let component: AdminAddpropertyComponent;
  let fixture: ComponentFixture<AdminAddpropertyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAddpropertyComponent]
    });
    fixture = TestBed.createComponent(AdminAddpropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
