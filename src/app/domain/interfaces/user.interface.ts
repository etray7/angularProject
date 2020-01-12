import { FullName } from './fullName.interface';

export interface User {
    id: number;
    fakeToken: string;
    name: FullName;
    login: string;
    password: string;
}
