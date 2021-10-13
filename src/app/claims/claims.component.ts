import { Component, OnInit } from '@angular/core';
import { PageEvent, MatDialog } from '@angular/material';
import { AcceptModelComponent } from './active/accept-model/accept-model.component';
import { ClaimModelComponent } from './active/claim-model/claim-model.component';


@Component({
  selector: 'app-claims',
  templateUrl: './claims.component.html',
  styleUrls: ['./claims.component.scss']
})
export class ClaimsComponent implements OnInit {

  filterToggle = false;

  constructor(public dialog: MatDialog) { }

  
  ngOnInit() {
  }

  openCreateClient(){
    let dialogRef = this.dialog.open(ClaimModelComponent, {
      data: null,
      height: 'auto',
      width: '920px',
      autoFocus: false
    });
  }
  openAcceptDialog() {
    let dialogRef = this.dialog.open(AcceptModelComponent, {
      data: null,
      height: 'auto',
      width: '500px',
      autoFocus: false
    });
}
}