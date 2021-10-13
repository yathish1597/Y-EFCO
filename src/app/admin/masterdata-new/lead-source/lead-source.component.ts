import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddLeadComponent } from './add-lead/add-lead.component';

@Component({
  selector: 'app-lead-source',
  templateUrl: './lead-source.component.html',
  styleUrls: ['./lead-source.component.scss']
})
export class LeadSourceComponent implements OnInit {

  items = [
    { name: 'Google', status: true},
    { name: 'Linked In', status: true},
    { name: 'Referral', status: true},
    { name: 'Returning Client', status: true},
    { name: 'Social Media', status: true},
    { name: 'Others', status: true}
  ]

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openActionTypeDialog(value) {
    let dialogRef = this.dialog.open(AddLeadComponent, {
      data: value,
      height: 'auto',
      width: '600px',
  });
  }

}
