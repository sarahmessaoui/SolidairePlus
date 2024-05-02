import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffecterDonComponent } from './affecter-don.component';

describe('AffecterDonComponent', () => {
  let component: AffecterDonComponent;
  let fixture: ComponentFixture<AffecterDonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AffecterDonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AffecterDonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
