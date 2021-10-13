import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { JobCodesDialogueComponent } from './job-codes-dialogue/job-codes-dialogue.component'

@Component({
  selector: 'app-job-codes',
  templateUrl: './job-codes.component.html',
  styleUrls: ['./job-codes.component.scss']
})
export class JobCodesComponent implements OnInit {

  items = [
    {code: '1DC', title: '1st Draft Corrections', category: 'Legal Team', rate: '$80.00', status: true},
    {code: '1DR', title: '1st Draft Reviewer', category: 'Production Team', rate: '$60.00', status: true},
    {code: 'ECAD2', title: 'Engineering CAD 2', category: 'Engineering Team', rate: '$85.00', status: true},
    {code: 'EPC1', title: 'Engineering Party Chief 1', category: 'Engineering Team', rate: '$100.00', status: true},
    {code: 'EPC2', title: 'Engineering Party Chief 2', category: 'Engineering Team', rate: '$110.00', status: true},
  ]

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openActionTypeDialog(value) {
    let dialogRef = this.dialog.open(JobCodesDialogueComponent, {
      data: value,
      height: 'auto',
      width: '600px',
  });
  }

}
