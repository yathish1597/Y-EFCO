import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-project-update-sow',
  templateUrl: './project-update-sow.component.html',
  styleUrls: ['./project-update-sow.component.scss']
})
export class ProjectUpdateSowComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ProjectUpdateSowComponent>) { }

  ngOnInit() {
  }
  close(){
    this.dialogRef.close();
  }
}
