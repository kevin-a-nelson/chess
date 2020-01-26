import { Component, OnInit } from '@angular/core';
import { Board } from '../board';
import { BoardService } from '../board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})

export class BoardComponent implements OnInit {
  board: Board;

  constructor(private service: BoardService) { }

  ngOnInit() {
    this.board = this.service.getBoard();
    console.log(this.board)
  }
}
