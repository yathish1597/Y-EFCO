import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-client-dialog',
  templateUrl: './add-client-dialog.component.html',
  styleUrls: ['./add-client-dialog.component.scss']
})
export class AddClientDialogComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<AddClientDialogComponent>,@Inject(MAT_DIALOG_DATA) public data: any  ) { }

  ngOnInit() {
    console.log(this.data);
  }
  close(): void {
    this.dialogRef.close();
  }

}
