import { Injectable } from '@angular/core';
import { ChessPiece } from './chess-piece';
import { ChessPieces } from './chess-pieces';


@Injectable({
  providedIn: 'root'
})

export class ChessPieceService {

  constructor() { }

  public getPiece(piece: string) {
    return new ChessPiece(ChessPieces[piece]);
  }
}
