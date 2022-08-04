import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {
@Input() content!: Book;
@Output() detailClick = new EventEmitter<Book>();


  constructor() { }

  ngOnInit(): void {
  }

  customStyle = {
    color: 'red'
  };

  handleDetailClick(click: MouseEvent){
    click.preventDefault();

   // console.log("Clickevent Details:", click);
   this.detailClick.emit(this.content);
  }
}
