import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-accept',
  templateUrl: './modal-accept.component.html',
  styleUrls: ['./modal-accept.component.scss']
})
export class ModalAcceptComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalAcceptComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {}

  onSubmit() {
    this.dialogRef.close(true);
  }

  closeModal() {
    this.dialogRef.close();
  }
}
