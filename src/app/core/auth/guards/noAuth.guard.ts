import { Injectable } from "@angular/core";
import { CanMatch, Route, UrlSegment, UrlTree } from "@angular/router";
import { Observable, of, switchMap } from "rxjs";
import { AuthService } from "../auth.service";

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanMatch {

  constructor(private _authService: AuthService) {

  }
  canMatch(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this._check();
  }

  private _check() {
    // Check the authentication status and return an observable of
        // "true" or "false" to allow or prevent the access
        return this._authService.check().pipe(
          switchMap((authenticated) => of(!authenticated))
      );
  }
}
