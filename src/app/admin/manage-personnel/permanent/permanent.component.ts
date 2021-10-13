import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PermanentEmployeesService } from 'src/app/shared/services/permanent-employees.service';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

@Component({
  selector: 'app-permanent',
  templateUrl: './permanent.component.html',
  styleUrls: ['./permanent.component.scss']
})
export class PermanentComponent implements OnInit {

  public pageSize = parseInt(localStorage.getItem('settings') ? localStorage.getItem('settings') : '10');
  public currentPage = 0;
  public totalSize = 0;
  filterToggle = false;

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
  constructor(public dialog: MatDialog, public permanentEmployee : PermanentEmployeesService) { }

  permanentEmployeeDetails;

  ngOnInit() {
    this.permanentEmployeeDetails = this.permanentEmployee.getPermanentEmployeeDetails();
  }

  openAddDialog(item){
    let dialogRef = this.dialog.open(AddEmployeeComponent, {
      data: item,
      height:'auto',
      width:'850px'
    });
    dialogRef.afterClosed().subscribe(data => {
      //this.getAllUsers();
    });
  }
}
