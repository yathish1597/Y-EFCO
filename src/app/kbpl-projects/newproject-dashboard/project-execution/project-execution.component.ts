import { Component, OnInit } from '@angular/core';
import { Chart } from "angular-highcharts";
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material';
import {  MomentDateAdapter } from '@angular/material-moment-adapter';
import { Title } from '@angular/platform-browser';

export const MY_FORMATS = {
  parse: {
      dateInput: 'LL'
  }, 
  display: {
      dateInput: 'DD-MM-YYYY',
      monthYearLabel: 'YYYY',
      dateA11yLabel: 'LL',
      monthYearA11yLabel: 'YYYY'
  }
};
@Component({
  selector: 'app-project-execution',
  templateUrl: './project-execution.component.html',
  styleUrls: ['./project-execution.component.scss'],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
{ provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }
  ]
})


export class ProjectExecutionComponent implements OnInit {

  startdate: string; 
  enddate: string;
  startdate2: string;
  enddate2 : string;
 
  convert(str) {
    var date = new Date(str),
    month = ("0" + date.getDate()).slice(-2), //to get month => getDate() returns month
      day = ("0" + (date.getMonth()+1)).slice(-2); //to get day => getMonth() returns Day
     
    return [ day,month,date.getFullYear()].join("-");
  }

  
  scrollGrid(side) {
    var ele = document.getElementById('grid-table-container1');
    if (side == 'right')
        ele.scrollLeft += 842;
    else
        ele.scrollLeft -= 842;
  }

  data = [
 {}
   
  ]
  data2 = [
    {}
  ]

  

 
showTable = false;
falseTableBody = [
]




  date(){
    // console.log(this.convert(this.dateOfBirth))
   // To set two dates to two variables
   var date1 = new Date(this.convert(this.startdate)); 
   var date2 = new Date(this.convert(this.enddate)); 

   // To calculate the time difference of two dates
   var Difference_In_Time = date2.getTime() - date1.getTime();
     
   // To calculate the no. of days between two dates
   var Difference_In_Days = (Difference_In_Time / (1000 * 3600 * 24))+1;
   document.getElementById("p1").innerHTML = Difference_In_Days + " days";
     
   //To display the final no. of days (result)
  console.log(Difference_In_Days);
  console.log(date1)
  console.log(date2)

  this.showTable = true;
  this.data.length = Difference_In_Days;
  this.data2.length = Difference_In_Days; 

}

  constructor(private titleService: Title) { }

  values =  [
    {srno: '1.', mpd : 'Incharge - Engineer', qty: '2'},
    {srno: '2.', mpd : 'Sr. Technicians', qty: '1'},
    {srno: '3.', mpd : 'Technicians', qty: '5'},
    {srno: '4.', mpd : 'Machinist  ', qty: '1'},
    {srno: '5.', mpd : 'Welder', qty: '1'},
    {srno: '6.', mpd : 'Workmen', qty: '1'},
    {srno: '7.', mpd : 'Driver', qty: '1'},
  ]

  ngOnInit() {
    this.titleService.setTitle("EFCO | Plan of Work")
    this.falseTableBody.length = 14
    this.hardcodeChart();
    this.hardcodeChart2();
    this.hardcodeChart3();


  }

  cumulativeManPower;
  cumulativeValves;
  cumulativeHandoverValves;

  hardcodeChart() {

    this.cumulativeManPower = new Chart({
 
      chart: {
        type: 'line'
      },
      title: {
        text: null,
        style: {
          display: "none",
        },
      },
      xAxis: {
        categories: ['1', '3', '5', '7', '9', '11', '13', '15','17','19', '21', '23', '25', '27', '29'
                     , '31', '33'],
        title: {
          text: '',
          align: 'middle',
          style: {
            display: "",
          },
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: '',
          align: 'middle'
        },
        labels: {
          overflow: 'justify'
        }
      },
      tooltip: {
        valueSuffix: ' %'
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
        data: [10, 15, 20, 25,30,35,40,45,50,55,60,60,60,60,60,55,50,45,40,35,30]
      }, {
        name: 'Actual',
        data: [0, 0, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      }]
    
    });
  }

  hardcodeChart2() {

    this.cumulativeValves = new Chart({
 
      chart: {
        type: 'line'
      },
      title: {
        text: null,
        style: {
          display: "none",
        },
      },
      xAxis: {
        categories: ['1', '3', '5', '7', '9', '11', '13', '15','17','19', '21', '23', '25', '27', '29'
                     , '31', '33'],
        title: {
          text: '',
          align: 'middle',
          style: {
            display: "",
          },
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: '',
          align: 'middle'
        },
        labels: {
          overflow: 'justify'
        }
      },
      tooltip: {
        valueSuffix: ' %'
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
        data: [10, 15, 20, 25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,95,95,95]
      }, {
        name: 'Actual',
        data: [0, 0, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      }]
    
    });
  }

  hardcodeChart3() {

    this.cumulativeHandoverValves = new Chart({
 
      chart: {
        type: 'line'
      },
      title: {
        text: null,
        style: {
          display: "none",
        },
      },
      xAxis: {
        categories: ['1', '3', '5', '7', '9', '11', '13', '15','17','19', '21', '23', '25', '27', '29'
                     , '31', '33'],
        title: {
          text: '',
          align: 'middle',
          style: {
            display: "",
          },
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: '',
          align: 'middle'
        },
        labels: {
          overflow: 'justify'
        }
      },
      tooltip: {
        valueSuffix: ' %'
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
        data: [10, 15, 20, 25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100,105,110]
      }, {
        name: 'Actual',
        data: [0, 0, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      },
    ]
    
    });
  }
}
