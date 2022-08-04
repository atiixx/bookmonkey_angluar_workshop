import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../models/book';

@Pipe({
  name: 'bookFilter'
})
export class BookFilterPipe implements PipeTransform {

  transform(books: Book[] | null, bookSearchTerm: string): Book[] {
    return !books ? [] : !bookSearchTerm ? books : books.filter(elem => Object.values(elem).filter(val => typeof val === 'string').some(val => val.toLowerCase().includes(bookSearchTerm.toLowerCase())));
  }

}
