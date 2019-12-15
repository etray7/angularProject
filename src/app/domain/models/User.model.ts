import { User } from '../interfaces/user.interface';
import { FullName } from '../interfaces/fullName.interface';

export class UserModel implements User {
    constructor(
        public id: number,
        public token: string,
        public name: FullName,
        public login: string,
        public password: string,
    ) { }
}
