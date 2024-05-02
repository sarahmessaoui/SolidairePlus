import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultercollecteurComponent } from './consultercollecteur.component';

describe('ConsultercollecteurComponent', () => {
  let component: ConsultercollecteurComponent;
  let fixture: ComponentFixture<ConsultercollecteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsultercollecteurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultercollecteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
