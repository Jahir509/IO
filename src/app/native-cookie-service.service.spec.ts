import { TestBed } from '@angular/core/testing';

import { NativeCookieServiceService } from './native-cookie-service.service';

describe('NativeCookieServiceService', () => {
  let service: NativeCookieServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NativeCookieServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
