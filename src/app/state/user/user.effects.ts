import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { exhaustMap, map, withLatestFrom, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { State } from '..';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { getToken, getCurrentUser } from './user.actions';

@Injectable()
export class UserEffect {
  getUser = createEffect(() =>
    this.actions$.pipe(
      ofType(getToken),
      withLatestFrom(this.store, (action, state) => ({ action, state })),
      exhaustMap((data: any) => {
        console.log(data.action.token);
        return this.authService.getUserInfo(data.action.token.token).pipe(
          tap((user: any) => {
            return getCurrentUser({ user });
          })
        );
      })
    )
  );


  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private store: Store<State>
  ) {}
}
