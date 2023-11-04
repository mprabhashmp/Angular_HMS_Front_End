import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolvedComplainsComponent } from './resolved-complains.component';

describe('ResolvedComplainsComponent', () => {
  let component: ResolvedComplainsComponent;
  let fixture: ComponentFixture<ResolvedComplainsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResolvedComplainsComponent]
    });
    fixture = TestBed.createComponent(ResolvedComplainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
