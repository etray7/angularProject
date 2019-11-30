import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Course } from 'src/app/domain/interfaces/course.interface';
import { MatDialog } from '@angular/material/dialog';
import { ModalAcceptComponent } from '../modal-accept/modal-accept.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-course-control-buttons',
  templateUrl: './course-control-buttons.component.html',
  styleUrls: ['./course-control-buttons.component.scss']
})
export class CourseControlButtonsComponent implements OnInit {

  @Input()
  course: Course;
  @Output()
  deleteCourse: EventEmitter<number> = new EventEmitter<number>();

  constructor(public dialog: MatDialog, private router: Router) { }

  ngOnInit() {}

  openDialog(course: Course): void {
    const dialogRef = this.dialog.open(ModalAcceptComponent, {
      width: '450px',
      data: {
        course,
        message: 'Are you sure you want to delete'
      },
      hasBackdrop: true,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }
      this.deleteCourse.emit(course.id);
    });
  }

  editCourse(course: Course) {
    this.router.navigateByUrl(`courses/${course.id}`, {
      queryParams: { ...course },
    })
  }
}
