import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadAllModules, PreloadingStrategy, RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { AboutComponent } from './about/about.component';
import { BookDetailComponent } from './book/book-detail/book-detail.component';

const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/about',
    pathMatch: 'full'
  },
  {
    path: 'books',
    loadChildren: () => import('./book/book.module').then(m => m.BookModule)
  },
  {
    path: 'about',
    component: AboutComponent
  }

];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
