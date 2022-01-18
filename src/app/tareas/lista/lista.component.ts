import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'kc-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  @Input() aItems: any;
  constructor() { }

  ngOnInit(): void {
  }

}
