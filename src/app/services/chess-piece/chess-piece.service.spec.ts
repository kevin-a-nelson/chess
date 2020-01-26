import { TestBed } from '@angular/core/testing';

import { ChessPieceService } from './chess-piece.service';

describe('ChessPieceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChessPieceService = TestBed.get(ChessPieceService);
    expect(service).toBeTruthy();
  });
});
