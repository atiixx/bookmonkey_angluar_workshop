import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from '../models/book';
import { BookApiService } from '../services/book-api.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

book!: Book;

  constructor(private readonly route: ActivatedRoute, private readonly bookApiService: BookApiService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
    this.bookApiService.getBookByISBN(params['isbn']).subscribe(val => this.book = val);

    })

  }

}
