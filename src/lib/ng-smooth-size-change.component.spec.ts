import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSmoothSizeChangeComponent } from './ng-smooth-size-change.component';

describe('NgSmoothSizeChangeComponent', () => {
  let component: NgSmoothSizeChangeComponent;
  let fixture: ComponentFixture<NgSmoothSizeChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgSmoothSizeChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSmoothSizeChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
