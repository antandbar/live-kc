import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kc-google-books',
  templateUrl: './google-books.component.html',
  styleUrls: ['./google-books.component.css']
})
export class GoogleBooksComponent implements OnInit {

  clave!: string;
  aLibros!: Array<string>;
  urlBase!: string;

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.aLibros = [];
    this.urlBase = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';
  }

  btnBuscar() {
    const URL = this.urlBase + this.clave;
    this.clave = '';
    this.aLibros = [];
    this.http.get(URL).subscribe(
      (response: any) => {
        response.items.forEach((element: { volumeInfo: { title: string; }; }): void => {
          this.aLibros.push(element.volumeInfo.title);
        }); }
    )
  }

}
