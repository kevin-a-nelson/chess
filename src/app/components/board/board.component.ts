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

  onSelect(id: string) {
    this.prevSelectedId = this.selectedId;
    this.selectedId = id;

    console.log(this.prevSelectedId);

  }

  ngOnInit() {
    this.selectedId = "";
    this.board = this.service.getBoard();
  }
}
