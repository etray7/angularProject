import { Author } from '../interfaces/author.interface';

export class AuthorModel implements Author {
    constructor(
        public id: number,
        public name: string,
    ) { }
}
