import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GererCollecteurComponent } from './gerer-collecteur.component';

describe('GererCollecteurComponent', () => {
  let component: GererCollecteurComponent;
  let fixture: ComponentFixture<GererCollecteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GererCollecteurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GererCollecteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
