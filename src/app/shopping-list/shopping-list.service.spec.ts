import { TestBed, inject } from '@angular/core/testing';

import { shoppingListService } from './shopping-list.service';

describe('shoppingListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [shoppingListService]
    });
  });

  it('should be created', inject([shoppingListService], (service: shoppingListService) => {
    expect(service).toBeTruthy();
  }));
});
