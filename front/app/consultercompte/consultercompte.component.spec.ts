import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterCompteComponent } from './consultercompte.component';

describe('ConsultercompteComponent', () => {
  let component: ConsulterCompteComponent;
  let fixture: ComponentFixture<ConsulterCompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsulterCompteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsulterCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
