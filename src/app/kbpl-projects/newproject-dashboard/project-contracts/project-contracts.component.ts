import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Title } from '@angular/platform-browser';
import { Breadcrumb } from 'primeng/primeng';
import { BreadcrumbComponent } from 'src/app/theme/components/breadcrumb/breadcrumb.component';
import { AddContractsComponent } from './add-contracts/add-contracts.component';
import { EditContractsComponent } from './edit-contracts/edit-contracts.component';
import { ProjectContractGridcolumnComponent } from './project-contract-gridcolumn/project-contract-gridcolumn.component';

@Component({
  selector: 'app-project-contracts',
  templateUrl: './project-contracts.component.html',
  styleUrls: ['./project-contracts.component.scss']
})
export class ProjectContractsComponent implements OnInit {

  constructor(public dialog: MatDialog,private titleService: Title) { }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  public bc='Contracts';
  public filterToggle: boolean;
  
  // items = [
  //   { category: 'Underground', stageColour: '#00ff0040',site:'Sector 56', sow:'Landscaping', invoices: "3/7", "project_code": "2478BA", "project_name": "MRC", "conRef": "A. SRPR ", "consultant": "FastTrack ", "BOQ_Items": "120/173", "la": " 244", "la_date": "12/02/2020 ", "agreement": "343", "agreement_date": "01-03-2020", "start_date": "14-04-2020", "target_date": "16-06-2020 ", "total_cost": "$7,000", "billed": "$6,000", "paid": "$2,000", "margin": "$4,000 ", "Status": 1, "Completion": "90%", "project": "Amazon" },
  //   { category: 'Surface', stageColour: '#00ff0040',site:'Sector 56', sow:'Club House', invoices: "4/7", "project_code": "3478BA", "project_name": "MPK", "conRef": "A. SRPR ", "consultant": "Design ", "BOQ_Items": "350/456", "la": " 245", "la_date": " 3/02/2020", "agreement": " 323", "agreement_date": "14-03-2020", "start_date": "15-04-2020", "target_date": "17-06-2020 ", "total_cost": "$7,100", "billed": "$6,100", "paid": "$2,000", "margin": "$3,900 ", "Status": 1, "Completion": "20%", "project": "Raheja" },
  //   { category: 'Civil Site', stageColour: '#FFA50069',site:'Lansdowne', sow:'Restaurant', invoices: "5/7", "project_code": "4478BA", "project_name": "Becon", "conRef": "A. SRPR ", "consultant": " Stone Factory", "BOQ_Items": "220/150", "la": "246 ", "la_date": "13/02/2020 ", "agreement": "265", "agreement_date": "15-03-2020", "start_date": "16-04-2020", "target_date": "18-06-2020 ", "total_cost": "$7,200", "billed": "$6,100", "paid": "$2,000", "margin": "$3,800 ", "Status": 4, "Completion": "30%", "project": "Dr.Reddy's" },
  //   { category: 'Underground', stageColour: '#87CEFA',site:'Lansdowne', sow:'Parking lot', invoices: "2/7", "project_code": "5478BA", "project_name": "IBW", "conRef": " A. SRPR", "consultant": "Instant ", "BOQ_Items": "198/120", "la": "247 ", "la_date": " 14/02/2020", "agreement": "376 ", "agreement_date": "16-03-2020", "start_date": "17-04-2020", "target_date": "19-06-2020 ", "total_cost": "$7,300", "billed": "$6,100", "paid": "$2,000", "margin": "$3,700 ", "Status": 3, "Completion": "40%", "project": "Reva Group" },
  // ]

  items=[
    { ename:"Rajendra Prasad Nalla",role:"Field Executive",contact:"+91 8753426124",status:"Active" },
    { ename:"Purushothaman ",role:"Field Officer",contact:"+91 6533426125",status:"Active" },
    { ename:"Nanda Kumar",role:"Unit Head",contact:"+91 7864326123",status:"Active" },
    { ename:"N.Subba Rao",role:"Unit Head",contact:"+91 9764542612",status:"Active" },

  ]

  statusOptions = [
    { value: 1, name: 'Completed', colorCode: '#00ff0040' },
    { value: 2, name: 'Pending', colorCode: '#C0C0C0' },
    { value: 3, name: 'In Process', colorCode: '#87CEFA' },
    { value: 4, name: 'On Hold', colorCode: '#FFA50069' },
  ];

  ngOnInit() {
    this.setTitle("EFCO | Team");

  }


  openGridColumnsDialog() {

    let dialogRef = this.dialog.open(ProjectContractGridcolumnComponent, {

      height: 'auto',
      width: '600px',
      autoFocus: false,
    });


    dialogRef.afterClosed().subscribe(prospects => {
      if (prospects == 'save') {

      }
    });
  }

  
  AddContract() {
    const dialogRef = this.dialog.open(AddContractsComponent, {

      autoFocus: false,
      height: 'auto',
      width: '600px',

    });
  }

  editContract(items) {
    const dialogRef = this.dialog.open(AddContractsComponent, {
      data:items,
      autoFocus: false,
      height: 'auto',
      width: '600px',

    });
  }


  scrollGrid(side) {
    var ele = document.getElementById('grid-table-container');
    if (side == 'right')
        ele.scrollLeft += 210;
    else
        ele.scrollLeft -= 210;
  }



}
