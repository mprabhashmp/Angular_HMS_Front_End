import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubwardenPropertyViewComponent } from './subwarden-property-view.component';

describe('SubwardenPropertyViewComponent', () => {
  let component: SubwardenPropertyViewComponent;
  let fixture: ComponentFixture<SubwardenPropertyViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubwardenPropertyViewComponent]
    });
    fixture = TestBed.createComponent(SubwardenPropertyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
