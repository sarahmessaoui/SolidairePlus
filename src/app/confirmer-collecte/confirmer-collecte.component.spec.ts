import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmerCollecteComponent } from './confirmer-collecte.component';

describe('ConfirmerCollecteComponent', () => {
  let component: ConfirmerCollecteComponent;
  let fixture: ComponentFixture<ConfirmerCollecteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfirmerCollecteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmerCollecteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
