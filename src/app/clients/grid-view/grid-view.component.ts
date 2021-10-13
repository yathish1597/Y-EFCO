import { Component, OnInit, Inject } from '@angular/core';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { PageEvent, MatDialog } from '@angular/material';
import { FormControl } from '@angular/forms';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { ProjectsDialogComponent } from '../projects-dialog/projects-dialog.component'; 
import { AddClientDialogComponent } from '../add-client-dialog/add-client-dialog.component';
import { GridViewClientsComponent } from './grid-view-clients/grid-view-clients.component';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss']
})
export class GridViewComponent implements OnInit {
  
  public single: any[];
  public multi: any[];
  public triple: any[];
  public showLegend = false;
  public gradient = false;
  public colorScheme = {
    domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
  }; 
  public showLabels = true;
  public explodeSlices = false;
  public doughnut = false;
  public settings: Settings;
  
  pageEvent: PageEvent;
  public pageSize = 10;
  public currentPage = 0;
  public totalSize = 0;
  filterToggle = false;
  status = [{'status_id':'1','status_name':'Active'},
  {'status_id':'2','status_name':'Inactive'}]
  
  public status_filter = ""; 
  contactName = new FormControl();
  clientName = new FormControl();
  jobTitle = new FormControl();
  contactNumber = new FormControl();
  statu = new FormControl();
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status?';
  public cancelClicked: boolean = false;
  totalProjects = [
    
    {contactname:"Vatsal Nagori", jobOrders:'1', clientname:'Adani kawai', clienttype:'Thermal power plant', email:'factory@efcoindia.com', phone:'8875024773', address:'D-46/2/1b', created:'07-07-2020', status:'true', state:"Jharkhand"},
    {contactname:"Ashit Kumar", jobOrders:'4', clientname:'Talwandi Saboo', clienttype:'Thermal power plant', email:'ashitkumar@tspcl.com', phone:'9937294311', address:'45/2/1c', created:'07-07-2020', status:'true', state:"Rajasthan" },
    {contactname:"surya Prakesh", jobOrders:'2', clientname:'carin bhogiot', clienttype:'Thermal Power plant', email:'suryaprakesh@efcoindia.com', phone:'6595959599', address:'C-120', created:'07-07-2020', status:'false', state:"Maharashtra"},
    {contactname:"Sameer", jobOrders:'3', clientname:'Stonefield', clienttype:'Hospitality', email:'sameer90@gmail.com', phone:'9235452885', address:'C-13/ B-block', created:'07-07-2020', status:'true', state:"Telangana"},
    {contactname:"Rajesh Balakrishna", jobOrders:'1', clientname:'Balco', clienttype:'Manufacturing', email:'abhi@gmail.com', phone:'9888459875', address:'D-46/2/1b', city:'Delhi', created:'07-07-2020', status:'true', state:"Uttar Pradesh"},
    {contactname:"Manu Arora", jobOrders:'5', clientname:'HINDALCO, RENUSAGAR', clienttype:'Manufacturing', email:'012amit@gmail.com', phone:'9882942885', address:'45/2/1c', city:'Hartana', postal:'215584', created:'07-07-2020', status:'true', state:"Ottawa" , country:"Canada"},
    {contactname:"Smith", jobOrders:'3', clientname:'Maithon Power', clienttype:'Thermal Power Plant', email:'rajesh12@gmail.com', phone:'9888736885', address:'C-120', created:'07-07-2020', status:'false', state:"Andhra Pradesh"},
    {contactname:"Anji Reddy / Anand", jobOrders:'4', clientname:'VTPS Ibrahimpatnam', clienttype:'Power Plant', email:'sameer90@gmail.com', phone:'9235452885', address:'C-13/ B-block', created:'07-07-2020', status:'true', state:"Andhra Pradesh"},
    {contactname:"Rahul Yadav", jobOrders:'2', clientname:'NTPC Rihand', clienttype:'Thermal Power Plant', email:'abhi@gmail.com', phone:'9888459875', address:'D-46/2/1b', created:'07-07-2020', status:'true', state:"Tamil Nadu"},
    {contactname:"Prabhat Varma", jobOrders:'7', clientname:'Yara Fertilizers', clienttype:'Chemical', email:'012amit@gmail.com', phone:'9882942885', address:'45/2/1c', created:'07-07-2020', status:'true', state:"Madya Pradesh" }
  
  ];
  
  constructor(public dialog: MatDialog,public appSettings:AppSettings) {
    const single = [
      {
        name: 'Telangana',
        value: 40
      },
      {
        name: 'Haryana',
        value: 49
      },
      {
        name: 'Gujarat',
        value: 36
      },
      {
        name: 'Delhi',
        value: 52
      },
      {
        name: 'Karnataka',
        value: 27
      },
      {
        name: 'Other',
        value: 10
      }
    ];
    const multi = [
      {
        name: 'Residential',
        value: 45
      },
      {
        name: 'Industrial',
        value: 70
      },
      {
        name: 'Commercial',
        value: 94
      },
      {
        name: 'Heavy Civil',
        value: 64
      },
    ];
    const triple = [
      {
        name: 'New',
        value: 147
      },
      {
        name: 'Repeat',
        value: 224
      },
    ];
    this.settings = this.appSettings.settings; 
    Object.assign(this, {single,multi,triple}); 
  }
  
  ngOnInit() {
    
  }
  
  public onSelect(event) {
  }
    
  openDeleteDialog(assets) {
    let dialogRef = this.dialog.open(DeleteConfirmDialogComponent, {
      data: assets,
      height: 'auto',
      width: 'auto',
      autoFocus: false
    });
    
    dialogRef.afterClosed().subscribe(data => {
      if (data != null && data !== undefined) {
      }
    });
  }
  
  openProjectsDilog(stat) {
    let dialogRef = this.dialog.open(ProjectsDialogComponent, {
      data: stat,
      height: 'auto',
      width: '600px',
      autoFocus: false
    });
    
    dialogRef.afterClosed().subscribe(data => {
      if (data != null && data !== undefined) {
      }
    });
  }
  
  openClientDialog(stat) {
    let dialogRef = this.dialog.open(AddClientDialogComponent, {
      data: stat,
      height: 'auto',
      width: '600px',
      autoFocus: false
    });
    
    dialogRef.afterClosed().subscribe(data => {
      if (data != null && data !== undefined) {
      }
    });
  }

  openGridColumnsDialog(){
    this.dialog.open(GridViewClientsComponent,{
      width:"600px",
      height:"auto"
    })
  }
  
}
