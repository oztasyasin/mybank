import { TestBed } from '@angular/core/testing';

import { LoginhelperService } from './loginhelper.service';

describe('LoginhelperService', () => {
  let service: LoginhelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginhelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
