import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AppSettings } from 'src/app/app.settings';
import { Settings } from './../../app.settings.model';
import { Chart } from "angular-highcharts";
import { MatSort, MatTableDataSource } from '@angular/material';


export interface Data {
  projectCode : string;
 orderTitle : string;
 client : string;
 manager: string;
 startDate : string;
 dueDate : string;
 status : string;
}

export interface Data2 {
  projectCode2 : string;
  orderTitle2 : string;
  client2 : string;
  manager2: string;
  startDate2 : string;
  dueDate2 : string;
  status2 : string;
 }



const ELEMENT_DATA: Data[] = [
  {projectCode : "APM 1028", orderTitle: "NTPC SINGRAULI", client : "NTPC Singrauli", manager : "Rama Krishna", startDate : "27-Sep-2020", dueDate: "10-Oct-2020", status:"In Progress"  },
  {projectCode : "APM 1029", orderTitle: "Online safety valve testing", client : "Sai Wardha Power Generation Limited", manager : "Purushothaman J", startDate : "09-Oct-2020", dueDate: "16-Oct-2020", status:"In Progress"  },
 {projectCode : "APM 1030", orderTitle: "KSK MAHANADI POWER COMPANY LTD", client : "KSK MAHANANDI", manager : "Rama Krishna", startDate : "13-Oct-2020", dueDate: "15-Nov-2020", status:"In Progress"  },
  {projectCode : "APM 1031", orderTitle: "Rework of SV (GEN 1001)", client : "KPCL Bellary", manager : "Nanda Kumar", startDate : "16-Oct-2020", dueDate: "23-Oct-2020", status:"In Progress"  },
 {projectCode : "APM 1032", orderTitle: "TPN 1014 Factory - 10 Valves", client : "TPCIL Nellore", manager : "Nanda Kumar", startDate : "16-Oct-2020", dueDate: "16-Nov-2020", status:"In Progress"  },
  {projectCode : "APM 1033", orderTitle: "NTR 2001- Factory", client : "NTPC Rihand", manager : "Rama Krishna", startDate : "21-Oct-2020", dueDate: "05-Nov-2020", status:"In Progress"  },
 {projectCode : "APM 1034", orderTitle: "TPN 1015 - In situ servicing", client : "TPCIL Nellore", manager : "Nanda Kumar", startDate : "08-Nov-2020", dueDate: "14-Nov-2020", status:"In Progress"  },
  {projectCode : "APM 1035", orderTitle: "KSB 1006", client : "KSK MAHANANDI", manager : "Rama Krishna", startDate : "03-Nov-2020", dueDate: "14-Nov-2020", status:"In Progress"  },
];

const ELEMENT_DATA2: Data2[] = [
  {projectCode2 : "APM 1038", orderTitle2: "Valve Refurbishment", client2 : "Yara Fertilizers", manager2 : "Uma Maheswararao", startDate2 : "27-Dec-2019", dueDate2: "31-Dec-2019", status2:"Completed"  },
  {projectCode2 : "APM 1042", orderTitle2: "Refurbishment Of Valves At TSPL", client2 : "TSPL", manager2 : "Uma Maheshwar", startDate2 : "25-Dec-2019", dueDate2: "15-Jan-2020", status2:"Completed"  },
{projectCode2 : "APM 1045", orderTitle2: "Repair Of Safety Valves", client2 : "Tata,Coffee", manager2 : "Uma Maheswararao", startDate2 : "10-Jan-2020", dueDate2: "17-Jan-2020", status2:"Completed"  },
  {projectCode2 : "APM 1046", orderTitle2: "Insitu Repair Of Valves", client2 : "Tata,Haldia", manager2 : "Uma Maheshwar", startDate2 : "10-Jan-2020", dueDate2: "31-Jan-2020", status2:"Completed"  },
{projectCode2 : "APM 1047", orderTitle2: "Servicing of various types of valves at Unit#1", client2 : "Adani Power Limited,Udupi", manager2 : "Uma Maheswararao", startDate2 : "16-Jan-2020", dueDate2: "10-Feb-2020", status2:"Completed"  },
  {projectCode2 : "APM 1048", orderTitle2: "Servicing Of Various Valves", client2 : "L&T,Nabha", manager2 : "Uma Maheshwar", startDate2 : "14-Feb-2020", dueDate2: "08-Mar-2020", status2:"Completed"  },
{projectCode2 : "APM 1049", orderTitle2: "Servicing of high pressure valves", client2 : "NTPC,Barh", manager2 : "Uma Maheswararao", startDate2 : "12-Feb-2020", dueDate2: "04-Mar-2020", status2:"Completed"  },
  {projectCode2 : "APM 1050", orderTitle2: "Servicing of valves MB Power", client2 : "MB Power", manager2 : "Arun Penchala", startDate2 : "15-Mar-2020", dueDate2: "30-Apr-2020", status2:"Completed"  }
 ];
/**
 * @title Table with sorting
 */

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})




export class JobComponent implements OnInit, AfterViewInit {
  public pageSize = parseInt(localStorage.getItem('settings') ? localStorage.getItem('settings') : '10');
  public currentPage = 0;
  public totalSize = 0;
  public single: any[];
  public two: any[];
  public three: any[];
  public four: any[];
  public sizes: any[];
  public colors: any[];
  public width: any[];
  public countries: any[];
  public singles: any[];
  public multi: any[];
  public analytics: any[];
  public showLegend = true;
  public showLegends = false;
  public gradient = true;
  public showXAxis = true;
  public showYAxis = true;
  public showXAxisLabel = false;
  public xAxisLabel = 'Year';
  public showYAxisLabel = false;
  public yAxisLabel = 'Population';
  public filterToggle:boolean;
  public filterToggle1:boolean;
  public colorScheme = {
    domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
  }; 

  public colorScheme2 = {
    domain: ['#40b78b', '#ecb70e', '#57507b', '#e45124', '#F47B00', '#606060']
  }; 

  public colorScheme3 = {
    domain: ['#40b78b', '#ecb70e', '#e45124', '#57507b', '#F47B00', '#606060']
  }; 
  public colorScheme4 = {
    domain: ['#2F3E9E', '#D22E2E',]
  }; 
  public showLabels = true;
  public explodeSlices = false;
  public doughnut = false;
  public settings: Settings;
  public autoScale = true; 

  totalProjects = [
    {contactname:"David", clientname:'Amazon', clienttype:'E-Com', email:'abhi@gmail.com', phone:'9888459875', address:'D-46/2/1b', city:'Delhi', postal:'110056', contact:'2', quotes:'1', projects:'1', created:'07-07-2020', status:'true', state:"New York" , country:"USA" , projectCount:"5"},
    {contactname:"Collin", clientname:'Flipkart', clienttype:'E-Com', email:'012amit@gmail.com', phone:'9882942885', address:'45/2/1c', city:'Hartana', postal:'215584', contact:'1', quotes:'1', projects:'3', created:'07-07-2020', status:'true', state:"Ontario" , country:"Canada" , projectCount:"2" },
    {contactname:"Warner", clientname:'E-Square', clienttype:'Architect', email:'rajesh12@gmail.com', phone:'9888736885', address:'C-120', city:'Delhi', postal:'110051', contact:'5', quotes:'2', projects:'5', created:'07-07-2020', status:'false', state:"Mumbai" , country:"India" , projectCount:"7"},
    {contactname:"Stokes", clientname:'Stonefield', clienttype:'Hospitality', email:'sameer90@gmail.com', phone:'9235452885', address:'C-13/ B-block', city:'Delhi', postal:'110036', contact:'1', quotes:'2', projects:'0', created:'07-07-2020', status:'true', state:"Telangana" , country:"India" , projectCount:"4"},
    {contactname:"Clive", clientname:'Bluedart', clienttype:'Courier', email:'abhi@gmail.com', phone:'9888459875', address:'D-46/2/1b', city:'Delhi', postal:'110056', contact:'2', quotes:'1', projects:'1', created:'07-07-2020', status:'true', state:"New Jersey" , country:"USA" , projectCount:"3"},
    {contactname:"Woakes", clientname:'Ebay', clienttype:'Courier', email:'012amit@gmail.com', phone:'9882942885', address:'45/2/1c', city:'Hartana', postal:'215584', contact:'1', quotes:'1', projects:'3', created:'07-07-2020', status:'true', state:"Ottawa" , country:"Canada" , projectCount:"2"},
    {contactname:"Smith", clientname:'FedEx', clienttype:'Courier', email:'rajesh12@gmail.com', phone:'9888736885', address:'C-120', city:'Delhi', postal:'110051', contact:'5', quotes:'2', projects:'5', created:'07-07-2020', status:'false', state:"Alabama" , country:"Switzerland" , projectCount:"5"},
    {contactname:"Jason", clientname:'Ocean 8', clienttype:'Hospitality', email:'sameer90@gmail.com', phone:'9235452885', address:'C-13/ B-block', city:'Delhi', postal:'110036', contact:'1', quotes:'2', projects:'0', created:'07-07-2020', status:'true', state:"Sydney" , country:"Australia" , projectCount:"3"},
    {contactname:"Rashid", clientname:'RedBull', clienttype:'Hospitality', email:'abhi@gmail.com', phone:'9888459875', address:'D-46/2/1b', city:'Delhi', postal:'110056', contact:'2', quotes:'1', projects:'1', created:'07-07-2020', status:'true', state:"British Columbia" , country:"Canada" , projectCount:"6"},
    {contactname:"Williamson", clientname:'Beacon', clienttype:'Mining', email:'012amit@gmail.com', phone:'9882942885', address:'45/2/1c', city:'Hartana', postal:'215584', contact:'1', quotes:'1', projects:'3', created:'07-07-2020', status:'true', state:"California" , country:"USA" , projectCount:"1"}
  ];

  condition = true;


  displayedColumns: string[] = ['projectCode', 'orderTitle', 'client', 'manager', 'startDate', 'dueDate','status'];
  displayedColumns2: string[] = ['projectCode2', 'orderTitle2', 'client2', 'manager2', 'startDate2', 'dueDate2','status2'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  dataSource2 = new MatTableDataSource(ELEMENT_DATA2);
  
  @ViewChild('firstTable') firstTable : MatSort;
  @ViewChild('secondTable') secondTable : MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.firstTable;
    this.dataSource2.sort = this.secondTable;
  }
  
  conditionToggle(){
    this.condition = !this.condition
  }


  constructor(public appSettings:AppSettings) { 
    
    this.settings = this.appSettings.settings; 
    const single = [
      {
        name: 'XYZ',
        value: 10.2 
      },
      {
        name: 'Adani Kawai',
        value: 5.1
      },
      {
        name: 'TPCIL Nellore',
        value: 5.1
      },
      {
        name: 'RCF Thal',
        value: 3.4
      },
      {
        name: 'VTPS Ibrahimpatnam',
        value: 3.4
      },
      {
        name: 'CGPL Mundra',
        value: 3.4
      },
      {
        name: 'Maruthi Cleaning',
        value: 3.4
      },
      {
        name: 'L & T Koradi',
        value: 3.4
      },
      {
        name: 'KSK Mahanandi',
        value: 3.4
      },
      {
        name: 'Others',
        value: 59.3
      }
    ]

    const two = [
      {
        name: 'Completed',
        value: 37.3
      },
      {
        name: 'In Progress',
        value: 61
      },
      {
        name: 'Pending',
        value: 1.7
      },
      {
        name: 'Cancelled',
        value: 0
      },
    ]

    const three = [
      {
        name: 'In Time',
        value: 0
      },
      {
        name: 'On Time',
        value: 0
      },
      {
        name: 'Delayed',
        value: 100
      },
    ]

    const four = [
      {
        name: 'New',
        value: 147
      },
      {
        name: 'Repeat',
        value: 224
      },
    ]
    Object.assign(this, {single,two, three,four}); 
  }


  
  elements: any = [];
  headElements = ['id', 'first', 'last', 'handle'];


  ngOnInit() {
    this.hardcodeChart();
    for (let i = 1; i <= 15; i++) {
      this.elements.push({ id: i, first: 'User ' + i, last: 'Name ' + i, handle: 'Handle ' + i });
    }
  }

  monthyPulseOfEmployees;

  hardcodeChart() {

    this.monthyPulseOfEmployees = new Chart({
 
      chart: {
        type: 'column'
      },
      title: {
        text: null,
        style: {
          display: "none",
        },
      },
      xAxis: {
        categories: ['1', '2', '3', '4', '5','6','7','8','9','10','11','12','13','14','15',
                     '16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'],
        title: {
          text: 'Days of Current Month',
          align: 'middle',
          style: {
            display: "",
          },
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Job Orders',
          align: 'middle'
        },
        labels: {
          overflow: 'justify'
        }
      },
      tooltip: {
        valueSuffix: ' '
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true
          }
        }
      },
     
      credits: {
        enabled: false
      },
      series: [ {
        name: 'Planned',
        data: [70, 60, 80, 30, 50,70, 60, 80, 30, 50,70, 60, 80, 30, 50,70, 60, 80, 30, 50,70, 60, 80, 30, 50,70, 60, 80, 30, 50]
      }, {
        name: 'Completed',
        data: [80, 30, 60, 25, 70,80, 30, 60, 25, 70,80, 30, 60, 25, 70,80, 30, 60, 25, 70,80, 30, 60, 25, 70,80, 30, 60, 25, 70]
      }]
    
    });
  }
}
