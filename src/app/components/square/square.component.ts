import { Component, OnInit, Input, Output, SimpleChanges } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})

export class SquareComponent implements OnInit {
  @Input() row: number;
  @Input() column: number;
  @Input() piece: string;
  @Input() id: string;
  @Input() selectedId: string;
  @Input() prevSelectedId: string;

  @Output() selected: EventEmitter<any> = new EventEmitter();

  color: string;

  ngOnChanges(changes: SimpleChanges) {

    if (this.selectedId === this.id) {
      this.color = 'select-color'
    } else {
      this.color = ((this.row + this.column) % 2 == 0) ? 'even-color' : 'odd-color';
    }

  }

  onClick() {
    if (this.selectedId === this.prevSelectedId) {
      if (this.color === 'select-color') {
        this.color = ((this.row + this.column) % 2 == 0) ? 'even-color' : 'odd-color';
      } else {
        this.color = 'select-color'
      }
    }
  }

  onSelect(selectedId: string) {
    this.selected.emit(null);
  }

  constructor() { }

  ngOnInit() {

    if (this.selectedId === this.id) {
      this.color = 'select-color'
    } else {
      this.color = ((this.row + this.column) % 2 == 0) ? 'even-color' : 'odd-color';
    }
  }
}
