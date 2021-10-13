import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ProjectAddSowComponent } from '../project-add-sow/project-add-sow.component';
// import { ProjectAddSowComponent } from '../../project-budget/project-add-sow/project-add-sow.component';
@Component({
  selector: 'app-jobcarddetails1',
  templateUrl: './jobcarddetails1.component.html',
  styleUrls: ['./jobcarddetails1.component.scss']
})
export class Jobcarddetails1Component implements OnInit {

  constructor( public dialog: MatDialog) { }

  ngOnInit() {
  }

  public openSowDailog() {
    let dialogRef = this.dialog.open(ProjectAddSowComponent, {
      data: false,
      height: 'auto',
      width: '600px',
      disableClose: true
    });
  }

}
