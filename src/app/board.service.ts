import { Injectable } from '@angular/core';
import { Board } from './board';
import { CHESS_BOARD } from './chess-board';

@Injectable({
  providedIn: 'root'
})

export class BoardService {

  constructor() { }

  getBoard(): Board {
    return CHESS_BOARD;
  }

}
