import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { BookDetailComponent } from '../book-detail/book-detail.component';

@Injectable({
  providedIn: 'root'
})
<<<<<<< HEAD
export class CanDeactivateGuard implements CanDeactivate<BookDetailComponent> {
=======
export class CanDeactivateGuard implements CanDeactivate<unknown> {
>>>>>>> master
  canDeactivate(
    component: BookDetailComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): boolean {
<<<<<<< HEAD
    return confirm("Sind sie sicher?");
=======
    return confirm("Sicher?");
>>>>>>> master
  }

}
