import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubwardenResolvedComplainsComponent } from './subwarden-resolved-complains.component';

describe('SubwardenResolvedComplainsComponent', () => {
  let component: SubwardenResolvedComplainsComponent;
  let fixture: ComponentFixture<SubwardenResolvedComplainsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubwardenResolvedComplainsComponent]
    });
    fixture = TestBed.createComponent(SubwardenResolvedComplainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
