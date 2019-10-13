import { User } from '../interfaces/user';

export class UserDTO implements User {
    id: number;
    firstName: string;
    lastName: string;
}
