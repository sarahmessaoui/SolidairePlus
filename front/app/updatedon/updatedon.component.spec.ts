import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedonComponent } from './updatedon.component';

describe('UpdatedonComponent', () => {
  let component: UpdatedonComponent;
  let fixture: ComponentFixture<UpdatedonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdatedonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatedonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
