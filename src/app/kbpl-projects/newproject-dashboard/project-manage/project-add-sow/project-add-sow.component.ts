import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-project-add-sow',
  templateUrl: './project-add-sow.component.html',
  styleUrls: ['./project-add-sow.component.scss']
})
export class ProjectAddSowComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ProjectAddSowComponent>) { }

  ngOnInit() {
  }
  close(){
    this.dialogRef.close();
  }
}
