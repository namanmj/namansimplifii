import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArraysectionComponent } from './arraysection.component';

describe('ArraysectionComponent', () => {
  let component: ArraysectionComponent;
  let fixture: ComponentFixture<ArraysectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArraysectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArraysectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
