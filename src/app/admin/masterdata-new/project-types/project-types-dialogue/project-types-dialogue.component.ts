import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-project-types-dialogue',
  templateUrl: './project-types-dialogue.component.html',
  styleUrls: ['./project-types-dialogue.component.scss']
})
export class ProjectTypesDialogueComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ProjectTypesDialogueComponent>) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
