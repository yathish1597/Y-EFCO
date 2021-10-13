import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ProjectAddSowComponent } from '../project-add-sow/project-add-sow.component';
// import { ProjectAddSowComponent } from '../../project-budget/project-add-sow/project-add-sow.component';
@Component({
  selector: 'app-jobcarddetails',
  templateUrl: './jobcarddetails.component.html',
  styleUrls: ['./jobcarddetails.component.scss']
})
export class JobcarddetailsComponent implements OnInit {

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
