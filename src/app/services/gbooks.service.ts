import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GbooksService {

  aLibros!: Array<string>;
  urlBase!: string;

  constructor(public http: HttpClient) { 
    this.aLibros = [];
    this.urlBase = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';
  }
  getLibros(clave:string) {
    const url = this.urlBase + clave;
    return this.http.get(url)
    .pipe(
      map(response => this.stractTitles(response))
    );
  }

  private stractTitles(response: any) {
    return response.items.map((book: { volumeInfo: { title: any; }; }) => book.volumeInfo.title);
  }
}
