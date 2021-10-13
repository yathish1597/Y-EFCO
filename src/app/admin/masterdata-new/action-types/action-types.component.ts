import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActionTypeDialogueComponent } from './action-type-dialogue/action-type-dialogue.component';

@Component({
  selector: 'app-action-types',
  templateUrl: './action-types.component.html',
  styleUrls: ['./action-types.component.scss']
})
export class ActionTypesComponent implements OnInit {

  items = [
    {code: 'Administration', status: true},
    {code: 'Engineering', status: true},
    {code: 'Field Activity', status: true},
    {code: 'Quality Control', status: true},
  ]

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openActionTypeDialog(value) {
    let dialogRef = this.dialog.open(ActionTypeDialogueComponent, {
      data: value,
      height: 'auto',
      width: '600px',
  });
  }

}
