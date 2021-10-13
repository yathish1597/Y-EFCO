import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ProjectTypesDialogueComponent } from './project-types-dialogue/project-types-dialogue.component';

@Component({
  selector: 'app-project-types',
  templateUrl: './project-types.component.html',
  styleUrls: ['./project-types.component.scss']
})
export class ProjectTypesComponent implements OnInit {

  items = [
    {type: 'Construction', status: true},
    {type: 'Engineering', status: true},
    {type: 'Internal', status: true},
    {type: 'Legal', status: true},
  ]

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openActionTypeDialog(value) {
    let dialogRef = this.dialog.open(ProjectTypesDialogueComponent, {
      data: value,
      height: 'auto',
      width: '600px',
  });
  }

}
