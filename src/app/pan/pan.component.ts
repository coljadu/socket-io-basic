import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pan',
  templateUrl: './pan.component.html',
  styleUrls: ['./pan.component.scss']
})
export class PanComponent implements OnInit {
  @Input() TileNumber: string;
  @Output() showNumber = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
