import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/domain/interfaces/user.interface';

export const getCurrentUser = createAction(
    'Get User Success',
    props<{ user: User }>(),
);

export const userLogout = createAction(
    'User Logout',
);

export const userLogin = createAction(
    'User Login',
);

export const getToken = createAction(
    'Get Token',
    props<{ token: string }>(),
);
