import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from '../models/book';
import { BookApiService } from '../services/book-api.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.scss']
})
export class BookNewComponent implements  OnInit{
  newForm!:FormGroup;

  constructor(private formBuilder: FormBuilder, private bookApiService: BookApiService, private route: Router) {}

  ngOnInit(): void {
   this.newForm = this.formBuilder.group({
      isbn: ['', [Validators.required]],
      title: ['', [Validators.required]],
      cover: [''],
      author: [''],
      abstract: ['']
    }, );
  }

  create(): void {
    this.bookApiService.create(this.newForm.value).pipe(take(1)).subscribe((book: Book) => {this.route.navigate([`/books`, book.isbn])});

  }
}
