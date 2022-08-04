import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Book } from './models/book';
import { BookApiService } from './services/book-api.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit, OnDestroy {
  title = 'Interesting Books';
  bookSearchTerm = '';
  books: Book[]= [];
  books$!: Observable<Book[]>;
  subscription!: Subscription;

  constructor(private bookApiService:BookApiService, private route: Router) { }


  ngOnDestroy(): void {
    //this.subscription?.unsubscribe();
 }

  ngOnInit(): void {

    this.books$ = this.bookApiService.getAll();

    /* this.subscription = this.bookApiService.getAll().subscribe({
      next: (books: Book[]) => {this.books = books},
      error: (error) => {console.error(error)},
      complete: () => {},
    }); */
  }

  goToBookDetails(book: Book){
    this.route.navigate([`/books/${book.isbn}`]);
    console.table(book);
  }

  updateBookSearchTerm(input: Event){
    this.bookSearchTerm = (input.target as HTMLInputElement).value;
  }


}


