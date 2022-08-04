import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { BookDetailComponent } from '../book-detail/book-detail.component';

@Injectable({
  providedIn: 'root'
})

export class CanDeactivateGuard implements CanDeactivate<BookDetailComponent> {

  canDeactivate(
    component: BookDetailComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): boolean {
    return confirm("Sind sie sicher?");

  }

}
