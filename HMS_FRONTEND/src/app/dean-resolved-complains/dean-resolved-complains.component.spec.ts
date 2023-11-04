import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeanResolvedComplainsComponent } from './dean-resolved-complains.component';

describe('DeanResolvedComplainsComponent', () => {
  let component: DeanResolvedComplainsComponent;
  let fixture: ComponentFixture<DeanResolvedComplainsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeanResolvedComplainsComponent]
    });
    fixture = TestBed.createComponent(DeanResolvedComplainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
