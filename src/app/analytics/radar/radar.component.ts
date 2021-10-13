import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AppSettings } from 'src/app/app.settings';
import { Settings } from './../../app.settings.model';
import { Chart } from "angular-highcharts";
import { MatSort, MatTableDataSource } from '@angular/material';



export interface Data {
  ReferenceNo : string;
 ClaimType : string;
 User : string;
 Amount: string;
 ClaimDate : string;
 status : string;
}

export interface Data2 {
  ReferenceNo2 : string;
  ClaimType2 : string;
  User2 : string;
 Amount2: string;
  ClaimDate2 : string;
  status2 : string;
 }



const ELEMENT_DATA: Data[] = [
  {ReferenceNo : "CLAIM0006", ClaimType: "Consumables", User : "Vinil Chander",Amount : "20000", ClaimDate : "27-Sep-2020", status:"In Progress"  },
  {ReferenceNo : "CLAIM0040", ClaimType: "Consumables", User : "Vinil Chander",Amount : "2500", ClaimDate : "09-Oct-2020", status:"In Progress"  },
 {ReferenceNo : "CLAIM0050", ClaimType: "Daily Allowance", User : "Uma Mahesh",Amount : "3000", ClaimDate : "13-Oct-2020", status:"In Progress"  },
  {ReferenceNo : "CLAIM0056", ClaimType: "Daily Allowance", User : "Arun Penchala",Amount : "3500", ClaimDate : "16-Oct-2020", status:"In Progress"  },
 {ReferenceNo : "CLAIM00066", ClaimType: "Train/Bus/Flight Fare", User : "Arun Penchala",Amount : "4000", ClaimDate : "16-Oct-2020",status:"In Progress"  },
  {ReferenceNo : "CLAIM00082", ClaimType: "Contractor Expenditure", User : "Uma Mahesh",Amount : "4500", ClaimDate : "21-Oct-2020",  status:"In Progress"  },
 {ReferenceNo : "CLAIM0083", ClaimType: "Consumables", User : "Uma Mahesh",Amount : "5000", ClaimDate : "08-Nov-2020",  status:"In Progress"  },
  {ReferenceNo : "CLAIM00085", ClaimType: "Diesel/Vehicle Maintanance", User : "Uma Mahesh",Amount : "5500", ClaimDate : "03-Nov-2020",status:"In Progress"  },
];

const ELEMENT_DATA2: Data2[] = [
  {ReferenceNo2 : "CLAIM0057", ClaimType2: "Food", User2 : "Uma Mahesh",Amount2 : "1000", ClaimDate2 : "27-Dec-2019", status2:"Rejected"  },
  {ReferenceNo2 : "CLAIM0058", ClaimType2: "Daily Allowance", User2 : "Uma Mahesh",Amount2 : "500", ClaimDate2 : "25-Dec-2019", status2:"Rejected"  },
{ReferenceNo2 : "CLAIM0009", ClaimType2: "Lodge/Quarters/Room Fare", User2 : "Arun Penchala",Amount2 : "900", ClaimDate2 : "10-Jan-2020", status2:"Rejected"  },
  {ReferenceNo2 : "CLAIM0023", ClaimType2: "Train/Bus/Flight Fare", User2 : "Arun Penchala",Amount2 : "5000", ClaimDate2 : "10-Jan-2020",  status2:"Rejected"  },
{ReferenceNo2 : "CLAIM0059", ClaimType2: "Travel", User2 : "Nikhil nikhil",Amount2 : "800", ClaimDate2 : "16-Jan-2020", status2:"Rejected"  },
  {ReferenceNo2 : "CLAIM0013", ClaimType2: "Food", User2 : "Nikhil nikhil",Amount2 : "900", ClaimDate2 : "14-Feb-2020",status2:"Rejected"  },
{ReferenceNo2 : "CLAIM0034", ClaimType2: "Daily Allowance", User2 : "kumar",Amount2 : "6000", ClaimDate2 : "12-Feb-2020",status2:"Rejected"  },
  {ReferenceNo2 : "CLAIM0056", ClaimType2: "Lodge/Quarters/Room Fare", User2 : "kumar",Amount2 : "600", ClaimDate2 : "15-Mar-2020",  status2:"Rejected"  }
 ];
/**
 * @title Table with sorting
 */

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.scss']
})

export class RadarComponent implements OnInit {
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


  constructor(public appSettings:AppSettings) { 
    
    this.settings = this.appSettings.settings; 
    const single = [
      {
        name: 'Travel',
        value: 4.4
      },
      {
        name: 'Medical',
        value: 2.7
      },
      {
        name: 'Food',
        value: 5.8
      },
      {
        name: 'Others',
        value: 87.1 
      },
    ]

    const two = [
      {
        name: 'Approved',
        value: 54.2
      },
      {
        name: 'Pending',
        value: 43.1
      },
      {
        name: 'Rejected',
        value: 2.7
      },
    ]

    const three = [
      {
        name: 'Same Day',
        value: 12.8
      },
      {
        name: 'Next Day',
        value: 16.2
      },
      {
        name: '3+ Days',
        value: 70.9     
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

  ngOnInit() {
    this.hardcodeChart();
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
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        title: {
          text: 'Months',
          align: 'middle',
          style: {
            display: "", //keep "none" to show nothing
          },
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Amount (₹)',
          align: 'middle'
        },
        labels: {
          overflow: 'justify'
        }
      },
      tooltip: {
        valueSuffix: ' ₹'
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
        name: 'Claimed',
        data: [700, 600, 800, 300, 500,700, 600, 800, 300, 500,700, 600]
      }, {
        name: 'Approved',
        data: [800, 300, 600, 250, 700,800, 300, 600, 250, 700,800, 300]
      }]
    
    });
  }



 

   displayedColumns: string[] = ['ReferenceNo', 'ClaimType', 'User', 'Amount', 'ClaimDate','status'];
  displayedColumns2: string[] = ['ReferenceNo2', 'ClaimType2', 'User2', 'Amount2', 'ClaimDate2','status2'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  dataSource2 = new MatTableDataSource(ELEMENT_DATA2);
  
  @ViewChild('firstTable') firstTable : MatSort;
  @ViewChild('secondTable') secondTable : MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.firstTable;
    this.dataSource2.sort = this.secondTable;
  }
 
}
