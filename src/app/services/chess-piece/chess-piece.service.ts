import { Injectable } from '@angular/core';
import { ChessPiece } from './chess-piece';


@Injectable({
  providedIn: 'root'
})

export class ChessPieceService {

  constructor() { }

  public getPiece(piece: string) {
    return new ChessPiece(piece);
  }
}
