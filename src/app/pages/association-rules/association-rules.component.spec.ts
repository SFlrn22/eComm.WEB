import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociationRulesComponent } from './association-rules.component';

describe('AssociationRulesComponent', () => {
  let component: AssociationRulesComponent;
  let fixture: ComponentFixture<AssociationRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssociationRulesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssociationRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
