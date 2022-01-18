import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kc-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {
  usuario: string | undefined;
  idioma: string | undefined;
  constructor() { }

  ngOnInit(): void {
    this.usuario = 'Pepe';
  }
  btnBorrar(ev: any) {
    console.log(ev);
    this.usuario = '';
    this.idioma = 'en';
  }
}
