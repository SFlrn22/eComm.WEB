import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindSourcePageComponent } from './find-source-page.component';

describe('FindSourcePageComponent', () => {
  let component: FindSourcePageComponent;
  let fixture: ComponentFixture<FindSourcePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FindSourcePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FindSourcePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
