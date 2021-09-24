import { TestBed } from '@angular/core/testing';

import { CatalogService } from './catalog.service';

describe('CatalogService', () => {
  let service: CatalogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatalogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should be called', () => {
    spyOn(service, 'getCatalogProducts');
    service.getCatalogProducts();
    expect(service.getCatalogProducts).toHaveBeenCalled();
  });
});
