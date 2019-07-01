import { TestBed } from '@angular/core/testing';

import { WhatsappAPIService } from './whatsapp-api.service';

describe('WhatsappAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WhatsappAPIService = TestBed.get(WhatsappAPIService);
    expect(service).toBeTruthy();
  });
});
