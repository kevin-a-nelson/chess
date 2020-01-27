import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})

export class SquareComponent implements OnInit {
  @Input() row: number;
  @Input() column: number;
  @Input() piece: string;


  color: string;

  onSelect() {
    this.color = "select-color"
  }

  onUnSelect() {
    this.color = ((this.row + this.column) % 2 == 0) ? 'even-color' : 'odd-color';
  }
  constructor() { }

  ngOnInit() {
    this.color = ((this.row + this.column) % 2 == 0) ? 'even-color' : 'odd-color';
  }

}
