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

  constructor(private service: BoardService) { }

  onSelect(id: string) {
    this.selectedId = id;
    console.log(this.selectedId);
  }

  ngOnInit() {
    this.selectedId = "";
    this.board = this.service.getBoard();
  }
}
