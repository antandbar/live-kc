import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'kc-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  item: string | undefined;
  @Output() evtAdd: EventEmitter<string>;
  constructor() {
    this.evtAdd = new EventEmitter();
   }

  ngOnInit(): void {
  }

  btnAdd() {
    this.evtAdd.emit(this.item);
    this.item = '';
  }
}
