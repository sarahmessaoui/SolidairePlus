import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerercompteComponent } from './gerercompte.component';

describe('GerercompteComponent', () => {
  let component: GerercompteComponent;
  let fixture: ComponentFixture<GerercompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GerercompteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GerercompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
