import { Component, OnInit, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginService } from '../../../logins/login.service';
import { AlertService } from '../../../shared/services/alert.service';
import { Router } from '@angular/router';
import { ProfileDialogComponent } from './profile-dialog/profile-dialog.component';
import { PasswordDialogComponent } from './password-dialog/password-dialog.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UserMenuComponent implements OnInit {

  public userImage = '../assets/img/profile_pic.png';
  name: any;
  public userData : any;
  public hasPermissions : boolean;
  public d : any;
  designation: any;
  userType = localStorage.getItem('userType');

  constructor(private dialogRef: MatDialog, private changeDetectorRefs: ChangeDetectorRef, public dialog: MatDialog, public router: Router, public loginService: LoginService, public alertService: AlertService) { }

  public logoutUser() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  openProfileDialog() {
    let dialogRef = this.dialog.open(ProfileDialogComponent, {
      data: null,
      height: 'auto',
      width: '600px',
      autoFocus: false,
      panelClass: 'my-dialog'
    });

    dialogRef.afterClosed().subscribe(prospects => {

    });
  }
  public openUserDialogs(id) {
    let dialogRef = this.dialog.open(ProfileDetailsComponent, {
        data: id,
        height: 'auto',
        width: '600px',
        autoFocus:false
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }
  openPasswordDialog() {
    let dialogRef = this.dialog.open(PasswordDialogComponent, {
      data: null,
      height: 'auto',
      width: '600px',
      autoFocus: false,
      panelClass: 'my-dialog'

    });

    dialogRef.afterClosed().subscribe(prospects => {

    });
  }

  ngOnInit() {
    
  }

  loadData() {
    var currentUser = JSON.parse(localStorage.getItem('trs_user_info'));
    this.userData = currentUser;
    for(let i = 0; i < this.userData.user_permissions.length;i++) {
      if(this.userData.user_permissions[i].right_master_id == 19) {
        this.d = this.userData.user_permissions[i].permission_type;
      }
    }
    console.log(this.d);
    if(parseInt(this.d.split('')[1]))
    this.hasPermissions = true;
    else 
    this.hasPermissions = false;
    console.log(this.hasPermissions);
  }

}
