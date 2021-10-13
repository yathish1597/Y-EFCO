import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { GridColumnsProjectsDialogComponent } from '../grid-columns-projects-dialog/grid-columns-projects-dialog.component';
@Component({
  selector: 'app-action-schedule',
  templateUrl: './action-schedule.component.html',
  styleUrls: ['./action-schedule.component.scss']
})
export class ActionScheduleComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  filterToggle: boolean = false;
  filterState: any;


  ngOnInit() {
  }

  filterFunction() {
    this.filterToggle = !this.filterToggle;
    this.filterState = this.filterToggle === true ? 'initial' : 'final';
  }

}
