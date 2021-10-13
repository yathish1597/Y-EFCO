import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-project-add-notes',
  templateUrl: './project-add-notes.component.html',
  styleUrls: ['./project-add-notes.component.scss']
})
export class ProjectAddNotesComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ProjectAddNotesComponent>,@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
  
  close(): void {
    this.dialogRef.close();
  }


}
