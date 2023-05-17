import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanMatch,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable, switchMap, of } from 'rxjs';
import { AuthService } from '../auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanMatch {
  constructor(private _authService: AuthService, private _router: Router) {}
  canMatch(
    route: Route,
    segments: UrlSegment[]
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return this._check(segments);
  }

  private _check(segments: UrlSegment[]): Observable<boolean | UrlTree> {
    return this._authService.check().pipe(
      switchMap((authenticated) => {
        // if the user is not authenticated
        if (!authenticated) {
          // Redirect to the sign-in page with a redirectUrl param
          const redirectURL = `/${segments.join('/')}`;
          const urlTree = this._router.parseUrl(
            `sign-in?redirectURL=${redirectURL}`
          );
          return of(urlTree);
        } else {
          return of(true);
        }
      })
    );
  }
}
