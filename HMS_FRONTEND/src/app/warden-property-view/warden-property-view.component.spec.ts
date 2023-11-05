import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WardenPropertyViewComponent } from './warden-property-view.component';

describe('WardenPropertyViewComponent', () => {
  let component: WardenPropertyViewComponent;
  let fixture: ComponentFixture<WardenPropertyViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WardenPropertyViewComponent]
    });
    fixture = TestBed.createComponent(WardenPropertyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
