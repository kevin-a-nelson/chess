import { Component, OnInit } from '@angular/core';
import { Board } from '../../services/board/board';
import { BoardService } from '../../services/board/board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})

export class BoardComponent implements OnInit {
  board: Board;
  selectedId: string;
  prevSelectedId: string;

  constructor(private service: BoardService) { }

  selectedPiece() {
    let cords = [+this.selectedId[0], +this.selectedId[1]];
    return this.board['board'][cords[0]][cords[1]];
  }

  setPiece(x: number, y: number, piece: string) {
    this.board['board'][x][y] = piece
  }

  onClick(id: string) {
    if (this.selectedId == id) {
      return;
    }

    let piece = this.selectedPiece();

    let cords = [+id[0], +id[1]];

    let selectedCords = [+this.selectedId[0], +this.selectedId[1]];

    this.setPiece(cords[0], cords[1], piece)
    this.setPiece(selectedCords[0], selectedCords[1], '');

    console.log(cords);
  }

  onSelect(id: string) {
    this.prevSelectedId = this.selectedId;
    this.selectedId = id;

    let piece = this.selectedPiece();

    let cords = [+this.selectedId[0], +this.selectedId[1]];

    this.setPiece(cords[0], cords[1], piece)
  }

  ngOnInit() {
    this.selectedId = "";
    this.board = this.service.getBoard();
  }
}
