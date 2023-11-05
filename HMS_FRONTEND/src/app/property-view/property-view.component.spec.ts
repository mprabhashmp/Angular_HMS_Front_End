import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyViewComponent } from './property-view.component';

describe('PropertyViewComponent', () => {
  let component: PropertyViewComponent;
  let fixture: ComponentFixture<PropertyViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertyViewComponent]
    });
    fixture = TestBed.createComponent(PropertyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
