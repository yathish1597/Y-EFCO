import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-proj-perm',
  templateUrl: './proj-perm.component.html',
  styleUrls: ['./proj-perm.component.scss']
})
export class ProjPermComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ProjPermComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
