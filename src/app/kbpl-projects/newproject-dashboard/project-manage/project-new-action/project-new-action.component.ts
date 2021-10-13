import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-project-new-action',
  templateUrl: './project-new-action.component.html',
  styleUrls: ['./project-new-action.component.scss']
})
export class ProjectNewActionComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ProjectNewActionComponent>) { }

  ngOnInit() {
  }
  close(){
    this.dialogRef.close();
  }
}

