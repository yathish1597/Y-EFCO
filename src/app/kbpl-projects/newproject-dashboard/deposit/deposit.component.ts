import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { RevenueModelComponent } from './revenue-model/revenue-model.component';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss']
})

export class DepositComponent implements OnInit {

  filterToggle = false;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  
  }

  public openSowDailog() {
    let dialogRef = this.dialog.open(RevenueModelComponent, {
      data: false,
      height: 'auto',
      width: '600px',
      disableClose: true
    });
  }



  empID = [

    {id:0, title:'--Select--'},
    {id:1, title:'E123'},
    {id:2, title:'E124'},
    {id:3, title:'E125'},
    {id:4, title:'E126'},
    {id:5, title:'E127'},
    {id:6, title:'E128'},
    
  ]

  empName = [
    {id:0, name: '--Select--'},
    {id:1, name:'RajKumar Rampally'},
    {id:2, name:'rajendraprasad nalla'},
    {id:3, name:'Divya Chamarthi'},
    {id:4, name:'Sneha Gadam'},
    {id:5, name:'Rama Krishna'},
    {id:6, name:'Purushothaman J'},
    
  ]

  description = [
    {id:0, name: '--Select--'},
    {id:1, name:'Train/Bus Fare'},
    {id:2, name:'Daily Allowance'},
    {id:3, name:'Night Allowance'},
    {id:4, name:'Local Conveyance'},
    {id:5, name:'Diesel/Vehicle Maint'},
    {id:6, name:'Job Work Out Source'},
    {id:7, name:'Container frieght'},
    {id:8, name:'Consumables'},
    {id:9, name:'Xerox'},
    {id:10, name:'Contractor Expenditure'},
    {id:11, name:'Miscellaneous Expenditure'},
    {id:12, name:'Policy Security'},
    {id:13, name:'T.T.E Extra charge'},
    {id:14, name:'Luggage charges'},
    {id:15, name:'Telephone'},
    {id:16, name:'Other Miscellaneous'},
    {id:17, name:'Site Advance'},
    
  ]

  bank= [
    {id:0, name: "--Select--"},
    {id:1, name: "ICICI"}
  ]

  assetLogHeading = [
    {tblHeading: "S.No", tblHeading2: "Asset Log",tblHeading3: "Budget", tblHeading4: "12.09.21",tblHeading5: "13.09.21", tblHeading6: "14.09.21",tblHeading7: "15.09.21", tblHeading8: "16.09.21",tblHeading9: "17.09.21",tblHeading10: "Cumulative",tblHeading11: "Balance"},

  ]
  assetLog = [
   
    {id:1, name:'Train/Bus Fare'},
    {id:2, name:'Daily Allowance'},
    {id:3, name:'Night Allowance'},
    {id:4, name:'Local Conveyance'},
    {id:5, name:'Diesel/Vehicle Maint'},
    {id:6, name:'Job Work Out Source'},
    {id:7, name:'Container frieght'},
    {id:8, name:'Consumables'},
    {id:9, name:'Xerox'},
    {id:10, name:'Contractor Expenditure'},
    {id:11, name:'Miscellaneous Expenditure'},
    {id:12, name:'Policy Security'},
    {id:13, name:'T.T.E Extra charge'},
    {id:14, name:'Luggage charges'},
    {id:15, name:'Telephone'},
    {id:16, name:'Other Miscellaneous'},
    {id:17, name:'Site Advance'},
    {id:18, name:'Total'},
    {id:19, name:'Cumulative'}

  ]

  selectedID: any = this.empID[0]; 
  selectedEmp: any = this.empName[0];

  changeEmp(value : any){
    this.value = value.id;
    let employeeName = this.empName[this.value];
    this.selectedEmp = employeeName;
    console.log(employeeName);
  }
  value;

  changeID(value: any){
    this.value = value.id;
    let employeeID = this.empID[this.value];
    this.selectedID = employeeID;
    console.log(employeeID);
  }

  allFields = [1];
  removeItem(index){
    this.allFields.splice(index, 1);
  }
  
  remove(e) {
    document.getElementById("repeat-" + e).remove();
  }
 
    scrollGrid(side) {
    var ele = document.getElementById('tableScroll');
    var ele2 = document.getElementById('grid-table-container');
    if (side == 'right')
      {  ele.scrollLeft += 210;
        ele2.scrollLeft += 210;}

    else
   {     ele.scrollLeft -= 210;
        ele2.scrollLeft -= 210;}
  }



  



}
