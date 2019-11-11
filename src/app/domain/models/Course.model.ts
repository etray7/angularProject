import { Course } from '../interfaces/course.interface';

export class CourseModel implements Course {
    constructor(
        public id: number,
        public title: string,
        public topRated: boolean,
        public creationDate: Date,
        public minDuration: number,
        public description: string,
    ) { }
}
