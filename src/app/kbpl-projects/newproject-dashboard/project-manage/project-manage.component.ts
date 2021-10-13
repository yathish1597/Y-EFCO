import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Title } from '@angular/platform-browser';
import { MenuItem } from 'primeng/primeng';
import { AppSettings } from 'src/app/app.settings';
import { DownloadExcelService } from 'src/app/download-excel.service';

import { ManageDialogComponent } from './manage-dialog/manage-dialog.component';
import {Router} from '@angular/router';
@Component({
  selector: 'app-project-manage',
  templateUrl: './project-manage.component.html',
  styleUrls: ['./project-manage.component.scss']
})
export class ProjectManageComponent implements OnInit {
  filterToggle: boolean;
  filterState: string;
  showTree : boolean = false;
  public excelData = [];

  item: MenuItem[];
  item2: MenuItem[];
  

  files = [
    {
      "label": "Sector 56",
      "children": [
        {
          "label": "- Landscaping",
          routerLink:"/profile"
        },
        {
          "label": "- Club House"
        }
      ]
    }, 
    {
      "label": "Lansdowne",
      "children": [
        {
          "label": "- Restaurant"
        },
        {
          "label": "- Parking Lot"
        }
      ]
    },
    {
      "label": "Newton",
      "children": [
        {
          "label": "- Tower A"
        },
        {
          "label": "- Tower B"
        },
        {
          "label": "- Tower C"
        },
        {
          "label": "- Common Facilities"
        }
      ]
    }
  ];

  // files1 = [
  //   {
  //     "isDefault": true,
  //     "siteId": 247,
  //     "siteName": "Site3",
  //     "label": "Sector 56",
  //     "quoteId": 251,
  //     "quoteNumber": "A-025022",
  //     "countryId": null,
  //     "countryName": "United States",
  //     "muncipalityId": null,
  //     "addressId": 794,
  //     "muncipalityName": null,
  //     "stateId": null,
  //     "stateName": "Michigan",
  //     "cityName": "Bay City",
  //     "zipCode": null,
  //     "googleDriveFolderId": "1Dn0Rbu-xkCIaRycMMhz1jsAfn7t4jVIo",
  //     "streetAddress": "2651 Hart Ridge Road",
  //     "createdBy": null,
  //     "createdDate": null,
  //     "modifiedBy": null,
  //     "modifiedDate": null,
  //     "iconClass": "fas fa-map-marker-alt cs-map-icon",
  //     "isSite": true,
  //     "selectable": true,
  //     "totalBudgetAmount": null,
  //     "totalQuotedAmount": null,
  //     "totalExpensesAmount": null,
  //     "totalBudgetHours": null,
  //     "children": [
  //       {
  //         "sowId": 321,
  //         "sowName": "SOW 3",
  //         "label": "- Landscaping",
  //         "sowTypeId": 93,
  //         "quoteId": 251,
  //         "isSite": false,
  //         "siteId": 247,
  //         "siteName": "Site3",
  //         "iconClass": "fa fa-briefcase",
  //         "createdBy": null,
  //         "modifiedBy": null,
  //         "googleDriveFolderId": "13hiBHoue4JWeOyXD9Qe-KS207M8B0oft",
  //         "styleClass": "unAwardedClass",
  //         "iconStyle": "#8fc0f1",
  //         "isSavedInBudget": true,
  //         "isApproved": false,
  //         "createdDate": "0001-01-01T00:00:00",
  //         "modifiedDate": "0001-01-01T00:00:00",
  //         "isDefault": true,
  //         "sowNumber": "A",
  //         "sowStatus": 116,
  //         "statusOptionId": null,
  //         "remarks": null,
  //         "sowInvoiceType": 53,
  //         "sowDescription": null,
  //         "projectTypeName": "Internal",
  //         "projectStatusName": "Open",
  //         "feeStructureName": "Time & Expense",
  //         "poNumber": "",
  //         "quoteSpreadSheetId": "1Nby_ZM_x6oJxgxKYth6gcDhxKUiMeyJGNz0mQTa07uM",
  //         "sowDueDate": "2021-04-29T00:00:00",
  //         "budgetSowId": 173
  //       },
  //       {
  //         "label": "- Club House"
  //       }
  //     ],
  //     "siteSerialNumber": "001",
  //     "styleClass": "siteClass",
  //     "lat": null,
  //     "lng": null
  //   },
  //   {
  //     "label": "Lansdowne",
  //     "children": [
  //       {
  //         "label": "- Restaurant"
  //       },
  //       {
  //         "label": "- Parking Lot"
  //       }
  //     ]
  //   },
  //   {
  //     "label": "Newton",
  //     "children": [
  //       {
  //         "label": "- Tower A"
  //       },
  //       {
  //         "label": "- Tower B"
  //       },
  //       {
  //         "label": "- Tower C"
  //       },
  //       {
  //         "label": "- Common Facilities"
  //       }
  //     ]
  //   }
  // ]

  constructor(
    private router: Router ,
    public dialog: MatDialog, 
    public appSettings:AppSettings, 
    public downloadExcelService: DownloadExcelService,
    private titleService: Title
    ) { }
    public setTitle(newTitle: string) {
      this.titleService.setTitle(newTitle);
    }
public firstexpand:boolean;
public secondexpand:boolean;
  ngOnInit() {
    console.log(this.router.url); 
    if(this.router.url=='/joborders/joborder-dashboard/jobcard/jobcarddetails'){
      this.firstexpand=true;
    }
    else if(this.router.url=='/joborders/joborder-dashboard/jobcard/jobcarddetails1'){
      this.secondexpand=true;
    }
    this.setTitle("EFCO | Job Cards");
    this.item = [ 
      {
      label: 'RAPK 1003-004',
      expanded: this.firstexpand,
      items: [
     
          {
            
              label: 'Job Card Details',
              icon:'pi pi-angle-right',
              routerLink: 'jobcarddetails',
          },
          {
            label: 'Condition',
            icon:' pi pi-angle-right',
            routerLink: 'condition',
           },
          {
          label: 'Replacement/ Brought out items',
          icon:'pi pi-angle-right',
          routerLink: 'replacement'
          },
        {
        label: 'Details of Repair',
        icon:'pi pi-angle-right',
        routerLink: 'repairdetails'
       },
      
       
      ]
      },
      
  ]

  this.item2 = [
    {
    label: 'RAPK 1003-006',
    expanded:this.secondexpand,
    items: [
        {
            label: 'Job Card Details',
            icon:'pi pi-angle-right',
            routerLink: 'jobcarddetails1',
          },
        {
          label: 'Condition',
          icon:' pi pi-angle-right',
          routerLink: 'condition1',

         },
        {
        label: 'Replacement/ Brought out items',
        icon:'pi pi-angle-right',
        routerLink: 'replacement1'

        },
      {
      label: 'Details of Repair',
      icon:'pi pi-angle-right',
      routerLink: 'repairdetails1'

     },
    
     
    ]
    },
    
]

  }

  jobcode = [
    { jobcode: "LPC1", rate: 55, status: true },
    { jobcode: "LPC2 Keeper", rate: 75, status: true },
    { jobcode: "EPC1", rate: 82, status: true },
    { jobcode: "EPC2", rate: 65, status: true },
    { jobcode: "CPC1", rate: 70, status: true },
    { jobcode: "CPC2", rate: 90, status: false },
    { jobcode: "OLS", rate: 50, status: true }

  ];
  taskData = [
    {
      "taskBudgetId": 1259,
      "budgetId": 172,
      "taskId": 13,
      "taskName": "Quote",
      "totalBudgetCostSOW": 1170,
      "totalBudgetHoursSOW": 15,
      "totalQuotedCostSOW": 0,
      "Data": [
        {
          "jobCodeBudgetId": 2101,
          "taskBudgetId": 1259,
          "jobCodeId": 96,
          "plannedHours": 2,
          "rate": 60,
          "total": 120,
          "notes": "Quote Preparation",
          "isUserAdded": null,
          "isDeleted": false
        },
        {
          "jobCodeBudgetId": 2102,
          "taskBudgetId": 1259,
          "jobCodeId": 99,
          "plannedHours": 3,
          "rate": 100,
          "total": 300,
          "notes": "Setting Budget & Scope Review",
          "isUserAdded": null,
          "isDeleted": false
        },
        {
          "jobCodeBudgetId": 2129,
          "taskBudgetId": 1259,
          "jobCodeId": 53,
          "plannedHours": 10,
          "rate": 75,
          "total": 750,
          "notes": "Enter labor related records",
          "isUserAdded": null,
          "isDeleted": false
        }
      ],
      "taskManageId": null
    },
    {
      "taskBudgetId": 1260,
      "budgetId": 172,
      "taskId": 1,
      "taskName": "Administration",
      "totalBudgetCostSOW": 60,
      "totalBudgetHoursSOW": 1,
      "totalQuotedCostSOW": 0,
      "Data": [
        {
          "jobCodeBudgetId": 2103,
          "taskBudgetId": 1260,
          "jobCodeId": 52,
          "plannedHours": 1,
          "rate": 60,
          "total": 60,
          "notes": "Client Contact",
          "isUserAdded": null,
          "isDeleted": false
        }
      ],
      "taskManageId": null
    },
    {
      "taskBudgetId": 1261,
      "budgetId": 172,
      "taskId": 9,
      "taskName": "Research",
      "totalBudgetCostSOW": 160,
      "totalBudgetHoursSOW": 2,
      "totalQuotedCostSOW": 0,
      "Data": [
        {
          "jobCodeBudgetId": 2104,
          "taskBudgetId": 1261,
          "jobCodeId": 89,
          "plannedHours": 1,
          "rate": 60,
          "total": 60,
          "notes": "Initial Project Setup",
          "isUserAdded": null,
          "isDeleted": false
        },
        {
          "jobCodeBudgetId": 2105,
          "taskBudgetId": 1261,
          "jobCodeId": 99,
          "plannedHours": 1,
          "rate": 100,
          "total": 100,
          "notes": "File Review",
          "isUserAdded": null,
          "isDeleted": false
        }
      ],
      "taskManageId": null
    },
    {
      "taskBudgetId": 1262,
      "budgetId": 172,
      "taskId": 10,
      "taskName": "Field",
      "totalBudgetCostSOW": 335,
      "totalBudgetHoursSOW": 4,
      "totalQuotedCostSOW": 0,
      "Data": [
        {
          "jobCodeBudgetId": 2106,
          "taskBudgetId": 1262,
          "jobCodeId": 84,
          "plannedHours": 1,
          "rate": 110,
          "total": 110,
          "notes": "Initial Fieldwork",
          "isUserAdded": null,
          "isDeleted": false
        },
        {
          "jobCodeBudgetId": 2107,
          "taskBudgetId": 1262,
          "jobCodeId": 56,
          "plannedHours": 1,
          "rate": 55,
          "total": 55,
          "notes": "Initial Fieldwork",
          "isUserAdded": null,
          "isDeleted": false
        },
        {
          "jobCodeBudgetId": 2108,
          "taskBudgetId": 1262,
          "jobCodeId": 70,
          "plannedHours": 1,
          "rate": 85,
          "total": 85,
          "notes": "Monumentation",
          "isUserAdded": null,
          "isDeleted": false
        },
        {
          "jobCodeBudgetId": 2109,
          "taskBudgetId": 1262,
          "jobCodeId": 72,
          "plannedHours": 1,
          "rate": 85,
          "total": 85,
          "notes": "Audit",
          "isUserAdded": null,
          "isDeleted": false
        }
      ],
      "taskManageId": null
    },
    {
      "taskBudgetId": 1263,
      "budgetId": 172,
      "taskId": 15,
      "taskName": "Drafting",
      "totalBudgetCostSOW": 160,
      "totalBudgetHoursSOW": 2,
      "totalQuotedCostSOW": 0,
      "Data": [
        {
          "jobCodeBudgetId": 2110,
          "taskBudgetId": 1263,
          "jobCodeId": 70,
          "plannedHours": 1,
          "rate": 85,
          "total": 85,
          "notes": "Drafting",
          "isUserAdded": null,
          "isDeleted": false
        },
        {
          "jobCodeBudgetId": 2111,
          "taskBudgetId": 1263,
          "jobCodeId": 55,
          "plannedHours": 1,
          "rate": 75,
          "total": 75,
          "notes": "Corrections",
          "isUserAdded": null,
          "isDeleted": false
        }
      ],
      "taskManageId": null
    },
    {
      "taskBudgetId": 1264,
      "budgetId": 172,
      "taskId": 12,
      "taskName": "Quality Control",
      "totalBudgetCostSOW": 175,
      "totalBudgetHoursSOW": 1,
      "totalQuotedCostSOW": 0,
      "Data": [
        {
          "jobCodeBudgetId": 2112,
          "taskBudgetId": 1264,
          "jobCodeId": 100,
          "plannedHours": 1,
          "rate": 175,
          "total": 175,
          "notes": "Plan Check",
          "isUserAdded": null,
          "isDeleted": false
        }
      ],
      "taskManageId": null
    },
    {
      "taskBudgetId": 1265,
      "budgetId": 172,
      "taskId": 16,
      "taskName": "Management",
      "totalBudgetCostSOW": 100,
      "totalBudgetHoursSOW": 1,
      "totalQuotedCostSOW": 0,
      "Data": [
        {
          "jobCodeBudgetId": 2113,
          "taskBudgetId": 1265,
          "jobCodeId": 99,
          "plannedHours": 1,
          "rate": 100,
          "total": 100,
          "notes": "Project Oversight & Scheduling",
          "isUserAdded": null,
          "isDeleted": false
        }
      ],
      "taskManageId": null
    },
    {
      "taskBudgetId": 1266,
      "budgetId": 172,
      "taskId": 14,
      "taskName": "Calculations",
      "totalBudgetCostSOW": 85,
      "totalBudgetHoursSOW": 1,
      "totalQuotedCostSOW": 0,
      "Data": [
        {
          "jobCodeBudgetId": 2114,
          "taskBudgetId": 1266,
          "jobCodeId": 70,
          "plannedHours": 1,
          "rate": 85,
          "total": 85,
          "notes": "Calculations",
          "isUserAdded": null,
          "isDeleted": false
        }
      ],
      "taskManageId": null
    }
  ]

  items=[
    {task: 'Field', action: 'Field Design', jobCode: 'EPC1', rate: '$ 100.00', planned: '5.00', dueDate: '2021-05-19', assignedTo: 'Sachin Patil', assigned: '5.00', actual: '5.00', cost: '500', worked: '5.00', remaining: '0.00', scheduled: '2021-05-12', date: '2021-05-12', status: 'Approved', submitted: '2021-05-24', manage: ''}, 
    {task: 'Quality Control', action: 'Project Setup', jobCode: 'PA1', rate: '$ 60.00', planned: '7.00', dueDate: '2021-05-18', assignedTo: 'Option Matrix', assigned: '7.00', actual: '0.00', cost: '0.00', worked: '0..00', remaining: '0.00', scheduled: '2021-05-12', date: '-', status: 'Scheduled', submitted: '-', manage: ''}, 
    {task: 'Field', action: 'Field Drafting', jobCode: 'CCAD3', rate: '$ 95.00', planned: '2.00', dueDate: '2021-05-18', assignedTo: 'Option Matrix', assigned: '2.00', actual: '0.00', cost: '0.00', worked: '0..00', remaining: '0.00', scheduled: '2021-05-12', date: '2021-05-10', status: 'Pending PM Review', submitted: '2021-05-10', manage: ''}, 
    {task: 'Research', action: 'Project Setup', jobCode: 'PA1', rate: '$ 60.00', planned: '2.00', dueDate: '2021-04-30', assignedTo: 'Bob Cormier', assigned: '2.00', actual: '0.00', cost: '0.00', worked: '0..00', remaining: '0.00', scheduled: '2021-05-12', date: '-', status: 'Scheduled', submitted: '-', manage: ''},   
  ];

  filterFunction() {
    this.filterToggle = !this.filterToggle;
    this.filterState = this.filterToggle === true ? 'initial' : 'final';
  }
  
  // public openSowDailog() {
  //   let dialogRef = this.dialog.open(ProjectAddSowComponent, {
  //     data: false,
  //     height: 'auto',
  //     width: '1055px',
  //     disableClose: true
  //   });
  // }

  // public openSiteDailog() {
  //   let dialogRef = this.dialog.open(ProjectAddSiteComponent, {
  //     data: false,
  //     height: 'auto',
  //     width: '1055px',
  //     disableClose: true
  //   });
  // }

  public openManageDialog() {
    let dialogRef = this.dialog.open(ManageDialogComponent, {
      data: false,
      height: 'auto',
      width: '1055px',
      disableClose: true
    });
  }
 
  //template function
  dowloadBulkUploadDataTemplate() {
    this.excelData = []
    this.excelData.push({ 'Site': "site1", 'SOW': "4", 'Tasks': "12", 'Actions': "78", 'Job Code': "27", 'Unit Rate': "9", 'Hours': "690", 'Price': "$ 76,450" });
    this.downloadExcelService.exportAsExcelFile(this.excelData, 'worksheet')
  }
}
