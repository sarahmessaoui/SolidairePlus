import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercherDonComponent } from './rechercher-don.component';

describe('RechercherDonComponent', () => {
  let component: RechercherDonComponent;
  let fixture: ComponentFixture<RechercherDonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RechercherDonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RechercherDonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
