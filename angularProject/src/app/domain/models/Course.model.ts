import { Course } from '../interfaces/course.interface';

export class CourseModel implements Course {
    constructor(
        public id: number,
        public title: string,
        public creationDate: Date,
        public minDuration: string,
        public description: string,
    ) { }
}
