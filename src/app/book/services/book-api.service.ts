import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from '../models/book';


@Injectable({
  providedIn: 'root'
})
export class BookApiService {

  constructor(private http: HttpClient) {}

  private endpoint = 'http://localhost:4730';


  /*books: Book[] = [
    {
      title: 'The Way of Kings',
      author: 'Brandon Sanderson',
      abstract: 'The Way of Kings is an epic fantasy novel written by American author Brandon Sanderson and the first book in The Stormlight Archive series. The novel was published on August 31, 2010, by Tor Books.'
    },
    {
      title: 'The Lies of Locke Lamora',
      author: 'Scott Lynch',
      abstract: 'An orphan’s life is harsh—and often short—in the mysterious island city of Camorr.',

    },
    {
      title: 'Piranesi',
      author: 'Susanna Clarke',
      abstract: 'Piranesi’s house is no ordinary building: its rooms are infinite, its corridors endless, its walls are lined with thousands upon thousands of statues, each one different from all the others.',

    }
  ]
*/

getAll(): Observable<Book[]>{
  return this.http.get<Book[]>('http://localhost:4730/books');
}

getBookByISBN(isbn: string): Observable<Book>{
  return this.http.get<Book>(`http://localhost:4730/books/${isbn}`);
}

create(book: Book): Observable<Book> {
  return this.http.post<Book>(`http://localhost:4730/books/`, book);
}

}

