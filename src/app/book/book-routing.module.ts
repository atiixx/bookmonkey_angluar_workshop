import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { CanDeactivateGuard } from './guards/can-deactivate.guard';


const BOOK_ROUTES: Routes = [
  {
    path: '',
    component: BookComponent
  },
  {
    path: ':isbn',
    component: BookDetailComponent,
    canDeactivate: [CanDeactivateGuard]
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(BOOK_ROUTES)
  ]
})
export class BookRoutingModule { }
