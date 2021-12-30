import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeSectionComponent } from './grade-section.component';

describe('GradeSectionComponent', () => {
  let component: GradeSectionComponent;
  let fixture: ComponentFixture<GradeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradeSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
