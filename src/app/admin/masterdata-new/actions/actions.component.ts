import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActionsDialogueComponent } from './actions-dialogue/actions-dialogue.component';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {

  items = [
    {code: '1st Draft Corrections', type: 'Administration', status: true},
    {code: '1st Draft Review', type: 'Engineering', status: true},
    {code: 'Field Design', type: 'Field Activity', status: true},
    {code: 'Field Drafting', type: 'Quality Control', status: true},
  ]

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openActionTypeDialog(value) {
    let dialogRef = this.dialog.open(ActionsDialogueComponent, {
      data: value,
      height: 'auto',
      width: '600px',
  });
  }

}
