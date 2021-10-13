import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';
import { RolesService } from 'src/app/shared/services/roles.service';
import { AddRolesComponent } from './add-roles/add-roles.component';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {

    tableList: Object[] = [];
    alltableListLookup:any;
    public pageSize = parseInt(localStorage.getItem('settings') ? localStorage.getItem('settings') : '10');
    public currentPage = 0;
    public totalSize = 0;
    tableListLookup = [];
    public allReports: Array<any> = [];
    sortedData=[];
    filteredAlerts = [];
    filterForm:FormGroup;    
    public popoverTitle: string = 'Confirm Delete';
    public popoverMessage: string = 'Are you sure you want to delete this.?';
    public popoverStatusTitle: string = 'Confirm Status Change';
    public popoverStatusMessage: string = 'Are you sure you want to change status.?';
    public cancelClicked: boolean = false;
    public popoversendMessage: 'Are you sure you want to send.?'
    public popoversendTitle: string = 'Confirm Delete';
    filterToggle: boolean;
    public searchText: string;
    public page: any;

  constructor(public dialog: MatDialog, private fb:FormBuilder, public alertService: AlertService, public roleService:RolesService) { }


  roleDetails = []
  ngOnInit() {

    this.roleDetails = this.roleService.getRoleDetails();
    
  }


    deleteRole(item){
      this.alertService.createAlert('Successfully deleted.', 1);
}

  openEditDialog(item) {
    let dialogRef = this.dialog.open(AddRolesComponent, {
      data: {data : item},
      height: 'auto',
      width: '850px'
    });    
    dialogRef.afterClosed().subscribe(data => {
      
    });
  }
}