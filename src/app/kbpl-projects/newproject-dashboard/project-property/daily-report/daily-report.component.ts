import { Component, OnInit } from '@angular/core';
import { Chart } from "angular-highcharts";

@Component({
  selector: 'app-daily-report',
  templateUrl: './daily-report.component.html',
  styleUrls: ['./daily-report.component.scss']
})
export class DailyReportComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
        categories: [
          '12-Sep-2021','13-Sep-2021','14-Sep-2021','15-Sep-2021','16-Sep-2021','17-Sep-2021','18-Sep-2021','19-Sep-2021','20-Sep-2021','21-Sep-2021','22-Sep-2021','23-Sep-2021','24-Sep-2021','25-Sep-2021','26-Sep-2021','27-Sep-2021','28-Sep-2021','29-Sep-2021','30-Sep-2021','01-Oct-2021','02-Oct-2021','03-Oct-2021','04-Oct-2021','05-Oct-2021','06-Oct-2021','07-Oct-2021','08-Oct-2021','09-Oct-2021','10-Oct-2021','11-Oct-2021','12-Oct-2021','13-Oct-2021','14-Oct-2021','15-Oct-2021','16-Oct-2021','17-Oct-2021','18-Oct-2021','19-Oct-2021','20-Oct-2021','21-Oct-2021','22-Oct-2021','23-Oct-2021','24-Oct-2021','25-Oct-2021','26-Oct-2021','27-Oct-2021','28-Oct-2021',
        ],
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
          text: 'Inch Dia',
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
        data: [1, 1, 1, 1,1,1,1,1,1,1,1, 1, 1, 1,1,1,1,1,1,1,1, 1, 1, 1,1,1,1,1,1,1,1, 1, 1, 1,1,1,1,1,1,1,1, 1, 1, 1,1,1,1]
      }, {
        name: 'Actual',
        data: [1	,1	,1	,1	,1.5	,2	,3,	4	,5,	4,	3,	2.5,	2.5,	2.5,	2.5,	2.5,	2.5,	2.5,	2.5	,2.5,	2.5,	2.5,	1.5	,1.5,	1.5,	1.5,	1.5,	1.5,	1.5,	1,	1,	1,	1	,1	,1,	0.8,	0.8,	0.8,	0.8,	0.8,	0.8,	0.8	,0.8,	0.8,	0.70,	0.70
        ]
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
        categories: [
          '12-Sep-2021','13-Sep-2021','14-Sep-2021','15-Sep-2021','16-Sep-2021','17-Sep-2021','18-Sep-2021','19-Sep-2021','20-Sep-2021','21-Sep-2021','22-Sep-2021','23-Sep-2021','24-Sep-2021','25-Sep-2021','26-Sep-2021','27-Sep-2021','28-Sep-2021','29-Sep-2021','30-Sep-2021','01-Oct-2021','02-Oct-2021','03-Oct-2021','04-Oct-2021','05-Oct-2021','06-Oct-2021','07-Oct-2021','08-Oct-2021','09-Oct-2021','10-Oct-2021','11-Oct-2021','12-Oct-2021','13-Oct-2021','14-Oct-2021','15-Oct-2021','16-Oct-2021','17-Oct-2021','18-Oct-2021','19-Oct-2021','20-Oct-2021','21-Oct-2021','22-Oct-2021','23-Oct-2021','24-Oct-2021','25-Oct-2021','26-Oct-2021','27-Oct-2021','28-Oct-2021',
        ],
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
          text: ' Amount in (Rupees.)',
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
        data: [0, 10000,15000 , 20000,30000,40000,50000,60000,70000,80000,90000,100000,110000,120000, 130000, 140000, 150000,160000,170000,180000,190000,200000,210000,220000, 230000, 240000, 250000,260000,270000,280000,290000,300000,310000,320000, 330000, 340000, 350000,360000,370000,380000,390000,400000,410000,420000, 430000, 440000, 450000]
      }, {
        name: 'Actual',
        data: [0, 5000, 7500, 10000,15000,20000,25000,35000,40000,45000,55000,60000,65000,70000,80000,85000,90000,95000,100000,105000]
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
        categories: [
          '12-Sep-2021','13-Sep-2021','14-Sep-2021','15-Sep-2021','16-Sep-2021','17-Sep-2021','18-Sep-2021','19-Sep-2021','20-Sep-2021','21-Sep-2021','22-Sep-2021','23-Sep-2021','24-Sep-2021','25-Sep-2021','26-Sep-2021','27-Sep-2021','28-Sep-2021','29-Sep-2021','30-Sep-2021','01-Oct-2021','02-Oct-2021','03-Oct-2021','04-Oct-2021','05-Oct-2021','06-Oct-2021','07-Oct-2021','08-Oct-2021','09-Oct-2021','10-Oct-2021','11-Oct-2021','12-Oct-2021','13-Oct-2021','14-Oct-2021','15-Oct-2021','16-Oct-2021','17-Oct-2021','18-Oct-2021','19-Oct-2021','20-Oct-2021','21-Oct-2021','22-Oct-2021','23-Oct-2021','24-Oct-2021','25-Oct-2021','26-Oct-2021','27-Oct-2021','28-Oct-2021',
        ],
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
          text: 'Inch Dia',
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
      series: [ 
        {
        name: 'Planned Receiving',
        data: [0,0,0,0,0,0,0,0,0,0,99,	198,	297,	396,	495,	594,	693,	792,	891,	990,	1089,	1188,	1287,	1386,	1485,	1584,	1683,	1782,	1881,	1980,	2079,	2178,	2277,	2376,	2475,	2574,	2673,	2772]
         }, 
        {
        name: 'Actual Received',
        data: [0,0,0,0,0,0,0,0,0,0,0,0,0,99,198,297,396,495,594,693,792,891,990,1089,1188,1287,1386,1485,1584,1683,1782,1881,1980,2079,2178,2277,2376,2475,2574,2673,2772,]
         },
         {
          name: 'Planned Handover',
          data: [50,100,180,260,340,420,500,580,660,740,820,900,980,1060,1140,1220,1300,1380,1460,1540,1620,1700,1780,1860,1940,]
           }, 
          {
          name: 'Actual Handovered',
          data: [0,0,0,0,30,100,200,250,300,380,480,600,750,800,900,1150,1150,1250,1305,1400,]
           },
    ]
    
    });
  }


  data = [
    {sNo: 1},
    {sNo: 2},
    {sNo: 3},
    {sNo: 4},
    {sNo: 5},
    {sNo: 6},
    {sNo: 7},
    {sNo: 8},
    {sNo: 9},
    {sNo: 10},
   
  ]

  data2 = [
    {description: 'Mandays', planned : 1856, actuals : 377, variancePercentage: "-79.69%"},
    {description: 'No. of Days', planned : 47, actuals : 16, variancePercentage: "-65.96%"},
    {description: 'Manpower', planned : 64, actuals : 0, variancePercentage: "-55.69%"},
    {description: 'Inch Dia', planned : 2773, actuals : 0, variancePercentage: "-71.69%"},
    {description: 'Expenditure', planned : 2726641, actuals : 742731, variancePercentage: "-68.69%"},
    {description: 'Mandays/InchDia', planned : 0.67, actuals : 0.00, variancePercentage: "-72.69%"},
    {description: 'Expenditure/InchDia', planned : 983, actuals : 0, variancePercentage: "-59.69%"},

  ]

  
  scrollGrid(side) {
    var ele = document.getElementById('grid-table-container1');
    if (side == 'right')
        ele.scrollLeft += 210;
    else
        ele.scrollLeft -= 210;
  }


  

}
