import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-delete-confirm-dialog',
  templateUrl: './delete-confirm-dialog.component.html',
  styleUrls: ['./delete-confirm-dialog.component.scss']
})
export class DeleteConfirmDialogComponent implements OnInit {
  public IsRemarks: boolean;
  public Remarks: string;
  public IsError: boolean;

  constructor(public dialogRef: MatDialogRef<DeleteConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
    
  }

  close() {
    this.dialogRef.close();
  }
  delete() {
    this.dialogRef.close(this.data);
  }
}
