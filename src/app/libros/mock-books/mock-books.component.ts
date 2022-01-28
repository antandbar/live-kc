import { Component, OnInit } from '@angular/core';
import { MbooksService } from 'src/app/services/mbooks.service';

@Component({
  selector: 'kc-mock-books',
  templateUrl: './mock-books.component.html',
  styleUrls: ['./mock-books.component.css']
})
export class MockBooksComponent implements OnInit {

  clave!: string;
  aLibros!: Array<string>;

  /* public mbooks: MbooksService; */
  constructor(public mbooks: MbooksService) { 
    /* this.mbooks = mbooks; */
  }

  ngOnInit(): void {
    this.clave = '';
    this.aLibros = [];
  }

  btnBuscar() {
    this.aLibros = this.mbooks.getLibros(this.clave);
  }
  
  btnBuscarRx() {
    this.mbooks.getLibros$(this.clave)
      .subscribe(
        (response:any) => {
          this.aLibros = response;
        }
      );
  }

}
