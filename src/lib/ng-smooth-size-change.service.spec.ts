import { TestBed } from '@angular/core/testing';

import { NgSmoothSizeChangeService } from './ng-smooth-size-change.service';

describe('NgSmoothSizeChangeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgSmoothSizeChangeService = TestBed.get(NgSmoothSizeChangeService);
    expect(service).toBeTruthy();
  });
});
