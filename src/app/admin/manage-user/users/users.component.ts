import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ProjPermComponent } from './proj-perm/proj-perm.component';
import { AlertService } from 'src/app/shared/services/alert.service';
import { ResetPasswordDialogComponent } from './reset-password-dialog/reset-password-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  access = {
    btCreate: false,
    btRead: false,
    btUpdate: false,
    btDelete: false
    };
  tableList: Object[] = [];
    alltableListLookup:any;
    public pageSize = parseInt(localStorage.getItem('settings') ? localStorage.getItem('settings') : '10');
    public currentPage = 0;
    public totalSize = 0;
    tableListLookup = [];
    public allReports: Array<any> = [];
    sortedData=[];
    filteredAlerts = [];
    status = [{id:1 , value:"Active"} , {id:2 , value:"Inactive"}];
    Status = [{ name: 'Active', value: true }, { name: "Inactive", value: false }];
    filterForm:FormGroup;
    
    public popoverTitle: string = 'Mobile Access';
    public popoverMessage: string = 'Are you sure you want to give Mobile Access ?';
    public popoverStatusTitle: string = 'Confirm Status Change';
    public popoverStatusMessage: string = 'Are you sure you want to change status.?';
    public cancelClicked: boolean = false;
    public popoversendMessage: 'Are you sure you want to send.?'
    public popoversendTitle: string = 'Confirm Delete';


    public popoverTitle1: string = 'Confirm Delete';
    public popoverMessage1: string = 'Are you sure you want to delete this.?';
    public popoverStatusTitle1: string = 'Confirm Status Change';
    public popoverStatusMessage1: string = 'Are you sure you want to change status.?';
    public cancelClicked1: boolean = false;
    public popoversendMessage1: 'Are you sure you want to send.?'
    public popoversendTitle1: string = 'Confirm Delete';

    allRoles : any = [];
    filterToggle: boolean;
    public searchText: string;
    public page: any;
    //users : any = [];
    allUsers : any = [];
    userData : any = [];

  constructor(public dialog: MatDialog, private fb:FormBuilder, private alertService:
    AlertService) {
      this.filterForm = this.fb.group({
        Status: new FormControl(null),      
        Keyword: new FormControl('',)
      });
  }

  users = [
    {UserName: 'RajKumar Rampally', email: 'raj@efcoindia.com', phoneNumber: '9491240470',role:'Field Executive', status: 'Active'},
    {UserName: 'rajendraprasad nalla', email: 'rajendraprasadn94@gmail.com', phoneNumber: '8247734225',role:'Field Executive', status: 'Active'},
    {UserName: 'Divya Chamarthi', email: 'qc@efcoindia.com', phoneNumber: '9492326597',role:'Field Executive', status: 'Active'},
    {UserName: 'Sneha Gadam', email: 'snehagadam27@gmail.com', phoneNumber: '7702588746',role:'Field Executive', status: 'Inactive'},
    {UserName: 'Rama Krishna', email: 'ramakrishna@efcoindia.com', phoneNumber: '8328150240',role:'Unit Head', status: 'Active' },
    {UserName: 'Purushothaman J', email: '	jp@efcoindia.com', phoneNumber: '9705902716',role:'Unit Head', status: 'Active' },

  ];

  ngOnInit() {
    // this.getAllUsers();
  }

  updateStatus(item) {
    this.alertService.createAlert('Successfully saved.', 1);
  }



  deleteUser(){
    this.alertService.createAlert('Successfully deleted.', 1);
}
deleteUser1(){
  this.alertService.createAlert('Successfully Added Mobile Access.', 1);
}

saveStatus() {
    this.alertService.createAlert('Successfully saved.', 1);
}

    openEditDialog(item){
    let dialogRef = this.dialog.open(EditUserComponent, {
      data: item,
      height:'auto',
      width:'850px'
    });
    dialogRef.afterClosed().subscribe(data => {
      //this.getAllUsers();
    });
  }

  openResetPassword(item){
    let dialogRef = this.dialog.open(ResetPasswordDialogComponent, {
      data: item,
      height:'auto',
      width:'850px'
    });
    dialogRef.afterClosed().subscribe(data => {
      //this.getAllUsers();
    });
  }

  openProjectPermissions() {
    let dialogRef = this.dialog.open(ProjPermComponent, {
      data: null,
      height: 'auto',
      width: '600px'
    });
  }
}