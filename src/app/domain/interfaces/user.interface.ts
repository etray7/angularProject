import { FullName } from './fullName.interface';

export interface User {
    id: number;
    token: string;
    name: FullName;
    login: string;
    password: string;
}
