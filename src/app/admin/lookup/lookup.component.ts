import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AddLookupDialogComponent } from './add-lookup-dialog/add-lookup-dialog.component';

@Component({
  selector: 'app-lookup',
  templateUrl: './lookup.component.html',
  styleUrls: ['./lookup.component.scss']
})
export class LookupComponent implements OnInit {

  
  constructor(public dialog: MatDialog, private alertService: AlertService) { }
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public cancelClicked: boolean = false;
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  
  deleteUser(elementValues){
    console.log(elementValues);
    }
    name:any;
  ngOnInit() {
  }

  tableList: Object[] = [
    { intLookupId: 2,code: 'Isolation Valve LocationofRepair', options:'Back-Seat',status:true}, 
    { intLookupId: 3,code: 'Isolation Valve LocationofRepair', options:'Disc / Plug / Wedge - Inlet',status:true}, 
    { intLookupId: 4,code: 'Isolation Valve LocationofRepair', options:'Disc / Plug / Wedge - Outlet',status:true}, 
    { intLookupId: 5,code: 'Job Card-Observation', options:'Eroded',status:true}, 
    { intLookupId: 6,code: 'Job Card-Observation', options:'Material Peeled off',status:true}, 
    { intLookupId: 7,code: 'Job Card-Observation', options:'Scratches Found',status:true}, 
  ];

  public openUserDialog(id) {
    let dialogRef = this.dialog.open(AddLookupDialogComponent, {
        data: id,
        height: 'auto',
        width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  deleteLookup() {
    this.alertService.createAlert('Successfully deleted.', 1);
  }

  saveStatus() {
    this.alertService.createAlert('Successfully saved.', 1);
}

}
