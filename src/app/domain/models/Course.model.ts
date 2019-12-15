import { Course } from '../interfaces/course.interface';
import { Author } from '../interfaces/author.interface';

export class CourseModel implements Course {
    constructor(
        public id: number,
        public name: string,
        public isTopRated: boolean,
        public date: string | Date,
        public length: number,
        public description: string,
        public authors: Author[],
    ) { }
}
