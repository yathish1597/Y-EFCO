import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ContractEmployeesService } from 'src/app/shared/services/contract-employees.service';
import { AddEmployeeComponent } from '../permanent/add-employee/add-employee.component';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.scss']
})
export class ContractComponent implements OnInit {

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
  constructor(public dialog: MatDialog, public employeeDetails : ContractEmployeesService) { }

  
  // users = [
  //   {EmpId:'L128',UserName: 'Purushothaman J',aadhar:'4528819771', email: '	jp@efcoindia.com', phoneNumber: '9705902716',role:'Unit Head', status: 'Active' },
  //   {EmpId:'L127',UserName: 'Rama Krishna',aadhar:'7542881881', email: 'ramakrishna@efcoindia.com', phoneNumber: '8328150240',role:'Unit Head', status: 'Active' },
  //   {EmpId:'L126',UserName: 'Sneha Gadam',aadhar:'8765225126', email: 'snehagadam27@gmail.com', phoneNumber: '7702588746',role:'Field Executive', status: 'Inactive'},
  //   {EmpId:'L125',UserName: 'Divya Chamarthi',aadhar:'8277226721', email: 'qc@efcoindia.com', phoneNumber: '9492326597',role:'Field Executive', status: 'Active'},
  //   {EmpId:'L124',UserName: 'rajendraprasad nalla',aadhar:'5129001001', email: 'rajendraprasadn94@gmail.com', phoneNumber: '8247734225',role:'Field Executive', status: 'Active'},
  //   {EmpId:'L123',UserName: 'RajKumar Rampally',aadhar:'4101420201', email: 'raj@efcoindia.com', phoneNumber: '9491240470',role:'Field Executive', status: 'Active'},
   
   
    

  // ];

  contractEmployeeDetails = []
  ngOnInit() {

    this.contractEmployeeDetails = this.employeeDetails.getContractEmployeeDetails();
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
