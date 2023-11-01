import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HmsDeanComponent } from './hms-dean.component';

describe('HmsDeanComponent', () => {
  let component: HmsDeanComponent;
  let fixture: ComponentFixture<HmsDeanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HmsDeanComponent]
    });
    fixture = TestBed.createComponent(HmsDeanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
