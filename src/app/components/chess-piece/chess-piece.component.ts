import { Component, OnInit, Input } from '@angular/core';
import { ChessPieceService } from '../../services/chess-piece/chess-piece.service';
import { ChessPiece } from '../../services/chess-piece/chess-piece';

@Component({
  selector: 'app-chess-piece',
  templateUrl: './chess-piece.component.html',
  styleUrls: ['./chess-piece.component.scss']
})

export class ChessPieceComponent implements OnInit {
  @Input() piece: string;
  chessPiece: ChessPiece;

  constructor(private service: ChessPieceService) { }

  ngOnInit() {
    this.chessPiece = this.service.getPiece(this.piece);
  }
}
