import { Component, OnInit, Input, Output } from '@angular/core';
import { ChessPieceService } from '../../services/chess-piece/chess-piece.service';
import { ChessPiece } from '../../services/chess-piece/chess-piece';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chess-piece',
  templateUrl: './chess-piece.component.html',
  styleUrls: ['./chess-piece.component.scss']
})

export class ChessPieceComponent implements OnInit {
  @Input() piece: string;
  @Output() select: EventEmitter<any> = new EventEmitter();
  @Output() unSelect: EventEmitter<any> = new EventEmitter();
  selected: boolean;
  chessPiece: ChessPiece;

  constructor(private service: ChessPieceService) { }

  onClickMe() {
    this.selected = !this.selected;

    if (this.selected) {
      this.select.emit(null);
    } else {
      this.unSelect.emit(null);
    }
  }

  ngOnInit() {
    this.chessPiece = this.service.getPiece(this.piece);
  }
}
