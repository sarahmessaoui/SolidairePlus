import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GererdonComponent } from './gererdon.component';

describe('GererdonComponent', () => {
  let component: GererdonComponent;
  let fixture: ComponentFixture<GererdonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GererdonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GererdonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
