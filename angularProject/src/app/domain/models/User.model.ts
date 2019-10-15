import { User } from '../interfaces/user.interface';

export class UserModel implements User {
    constructor(
        public id: number,
        public firstName: string,
        public lastName: string,
    ) { }
}
