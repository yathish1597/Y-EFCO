import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-manage-dialog',
  templateUrl: './manage-dialog.component.html',
  styleUrls: ['./manage-dialog.component.scss']
})
export class ManageDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ManageDialogComponent>) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close('close');
  }

}
