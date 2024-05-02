import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterdonComponent } from './consulterdon.component';

describe('ConsulterdonComponent', () => {
  let component: ConsulterdonComponent;
  let fixture: ComponentFixture<ConsulterdonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsulterdonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsulterdonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
