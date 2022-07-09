import { TestBed } from '@angular/core/testing';

import { LaravelMarvelService } from './laravel-marvel.service';

describe('LaravelMarvelService', () => {
  let service: LaravelMarvelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaravelMarvelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
