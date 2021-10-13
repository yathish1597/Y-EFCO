import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddStateComponent } from '../add-state/add-state.component';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent implements OnInit {

  items = [
    {state: 'Luxembourg', city:'1', status: true},
    {state: 'Liege', city:'0', status: true},
    {state: 'Namur', city:'0', status: true},
    {state: 'Brabant Walloon', city:'0', status: true},
    {state: 'Hainut', city:'0', status: true},
    {state: 'Limbourg', city:'0', status: true}
  ]

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openActionTypeDialog(value) {
    let dialogRef = this.dialog.open(AddStateComponent, {
      data: value,
      height: 'auto',
      width: '600px',
  });
  }

}
