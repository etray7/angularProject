import { Course } from '../interfaces/course';

export class CourseDTO implements Course {
    id: number;
    title: string;
    creationDate: Date;
    minDuration: number;
    description: string;
}
