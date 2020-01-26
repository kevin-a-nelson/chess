import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chess-piece',
  templateUrl: './chess-piece.component.html',
  styleUrls: ['./chess-piece.component.scss']
})

export class ChessPieceComponent implements OnInit {
  @Input() piece: string;

  constructor() { }

  ngOnInit() {

  }
}
