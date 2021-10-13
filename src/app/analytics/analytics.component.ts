import { Settings } from './../app.settings.model';
import { AppSettings } from 'src/app/app.settings';
import { Component, OnInit } from "@angular/core";
import { Chart } from "angular-highcharts";

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {
  
 public single: any[];
 public two: any[];
 public three: any[];
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
 public showLabels = true;
 public explodeSlices = false;
 public doughnut = false;
 public settings: Settings;
 public autoScale = true; 

  constructor(public appSettings:AppSettings) {
    this.settings = this.appSettings.settings; 
    const single = [
      {
        name: 'Manjeera Industries',
        value: 30
      },
      {
        name: 'Orion Group',
        value: 25
      },
      {
        name: 'Mantri Group',
        value: 10
      },
      {
        name: 'Asian Group',
        value: 15
      },
      {
        name: 'MNR Group',
        value: 20
      }
     
    ];
    const two = [
      {
        name: 'Manjeera Industries',
        value: 30
      },
      {
        name: 'Orion Group',
        value: 25
      },
      {
        name: 'Mantri Group',
        value: 10
      },
      {
        name: 'Asian Group',
        value: 15
      },
      {
        name: 'MNR Group',
        value: 20
      }
     
    ];
    const three = [
      {
        name: 'Manjeera Industries',
        value: 25
      },
      {
        name: 'Orion Group',
        value: 15
      },
      {
        name: 'Mantri Group',
        value: 9
      },
      {
        name: 'Asian Group',
        value: 30
      },
      {
        name: 'MNR Group',
        value: 21
      }
     
    ];
    Object.assign(this, {single,two,three}); 
  }

  ngOnInit() {
    this.hardcodeChart();
  }
  monthyPulseOfEmployees;
  disciplineChartMonthly;
  EmployeesOnboardingChart;
  tentureOfEmployees;
  conversationChart;
  disciplinePercentagePieChart;
  EmployeesOnboardedPieChart;
  hiringMonthly;
  receiveandpay;
  aeginganalysis;
  delaydistribution;
  
  hardcodeChart() {
    this.monthyPulseOfEmployees = new Chart({

      chart: {
        type: 'bar'
      },
      title: {
        text: null,
        style: {
          display: "none",
        },
      },
      xAxis: {
        categories: ['Manjeera Industries/Collection', 'Orion Group/Collection', 'Mantri Group/Collection', 'Asian Group/Collection', 'MNR Group/Collection'],
        title: {
          text: null,
          style: {
            display: "none",
          },
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Percentage %',
          align: 'high'
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
        name: 'Project',
        data: [70, 60, 80, 30, 50]
      }, {
        name: 'Collection',
        data: [80, 30, 60, 25, 70]
      }]
    
    });

    this. receiveandpay = new Chart({

      chart: {
        type: 'bar'
      },
      title: {
        text: null,
        style: {
          display: "none",
        },
      },
      xAxis: {
        categories: ['Manjeera Industries', 'Orion Group', 'Mantri Group', 'Asian Group', 'MNR Group'],
        title: {
          text: null,
          style: {
            display: "none",
          },
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'RS.',
          align: 'high'
        },
        labels: {
          overflow: 'justify'
        }
      },
      tooltip: {
        valueSuffix: ' RS.'
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
        name: 'Receivables',
        data: [7000, 6000, 8000, 3000, 5000]
      }, {
        name: 'Payables',
        data: [8000, 3000, 6000, 2500, 7000]
      }]
    
    });

    this.EmployeesOnboardingChart = new Chart({
      chart: {
        type: "line",
      },
      title: {
        text: null,
        style: {
          display: "none",
        },
      },
      credits: {
        enabled: false,
      },
      legend: {
        enabled: false,
      },
      plotOptions: {
        series: {
          dataLabels: {
            enabled: true,
            format: "{point.y}",
          },
          showInLegend: true,
        },
      },
      tooltip: {
        pointFormat:
          '<span style="color:{point.color}">{point.name} Rs. </span>: <b>{point.y}Cr</b>',
      },

      xAxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      yAxis: {
        title: {
          text: "Rs",
        },
      },
      series: [
        {
          type: "line",
          color: "rgb(33, 101, 190)",
          data: [2, 3, 4, 2, 1, 3, 5, 1, 2, 5, 2, 4],
        },
      ],
    });
    this.disciplineChartMonthly = new Chart({
      chart: {
        type: "line",
      },
      title: {
        text: null,
        style: {
          display: "none",
        },
      },
      credits: {
        enabled: false,
      },
      legend: {
        enabled: false,
      },
      plotOptions: {
        series: {
          dataLabels: {
            enabled: true,
            format: "{point.y}",
          },
          showInLegend: true,
        },
      },
      tooltip: {
        pointFormat:
          '<span style="color:{point.color}">{point.name} Purchase Orders </span>: <b>{point.y}</b>',
      },
      yAxis: {
        title: {
          text: "Purchase orders",
        },
      },

      xAxis: {
        categories: [
         
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
         
        ],
      },
      series: [
        {
          type: "line",
          color: "rgb(33, 101, 190)",
          data: [2, 3, 4, 7, 6, 3],
        },
      ],
    });
    this.hiringMonthly = new Chart({
      chart: {
        type: "line",
      },
      title: {
        text: null,
        style: {
          display: "none",
        },
      },
      credits: {
        enabled: false,
      },
      legend: {
        enabled: false,
      },
      plotOptions: {
        series: {
          dataLabels: {
            enabled: true,
            format: "{point.y}",
          },
          showInLegend: true,
        },
      },
      tooltip: {
        pointFormat:
          '<span style="color:{point.color}">{point.name} Number of hirings </span>: <b>{point.y}</b>',
      },
      yAxis: {
        title: {
          text: "Hirings",
        },
      },

      xAxis: {
        categories: [
         
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
         
        ],
      },
      series: [
        {
          type: "line",
          color: "rgb(33, 101, 190)",
          data: [4, 8, 2, 4, 6, 3],
        },
      ],
    });


    this.tentureOfEmployees = new Chart({
      chart: {
        type: "bar",
      },
      title: {
        text: null,
        style: {
          display: "none",
        },
      },
      credits: {
        enabled: false,
      },

      yAxis: {
        title: {
          text: "%",
        },
      },
      xAxis: {
        categories: [
          "Manjeera Industries",
          "Orion Group",
          "Mantri Group",
          "Asian Group",
          "MNR Group",
        ],
      },
      legend: {
        enabled: false,
      },
      plotOptions: {
        series: {
          dataLabels: {
            enabled: true,
            format: "{point.y}",
          },
          showInLegend: false,
        },
      },
      tooltip: {
        pointFormat:
          '<span style="color:{point.color}"> </span>: <b>{point.y}%</b>',
      },
      series: [
        {
          type: "bar",
          color: "rgb(33, 101, 190)",
          data: [
            {
              name: "Manjeera Industries",
              y: 70,
            },
            {
              name: "Orion Group",
              y: 60,
            },
            {
              name: "Mantri Group",
              y: 30,
            },
            {
              name: "Asian Group",
              y: 80,
            },
            {
              name: "MNR Group",
              y: 50,
            },
          ],
        },
      ],
    });

    
    this. aeginganalysis = new Chart({
      chart: {
        type: "bar",
      },
      title: {
        text: null,
        style: {
          display: "none",
        },
      },
      credits: {
        enabled: false,
      },

      yAxis: {
        title: {
          text: "%",
        },
      },
      xAxis: {
        categories: [
          "Less than 30 Days",
          "30-60 Days",
          "60-90 Days",
          "90-180 Days",
          "More than 6 Months",
        ],
      },
      legend: {
        enabled: false,
      },
      plotOptions: {
        series: {
          dataLabels: {
            enabled: true,
            format: "{point.y}",
          },
          showInLegend: false,
        },
      },
      tooltip: {
        pointFormat:
          '<span style="color:{point.color}"> </span>: <b>{point.y}%</b>',
      },
      series: [
        {
          type: "bar",
          color: "rgb(33, 101, 190)",
          data: [
            {
              name: "Less than 30 Days",
              y: 70,
            },
            {
              name: "30-60 Days",
              y: 60,
            },
            {
              name: "60-90 Days",
              y: 30,
            },
            {
              name: "90-180 Days",
              y: 80,
            },
            {
              name: "More than 6 Months",
              y: 50,
            },
          ],
        },
      ],
    });
    this.delaydistribution = new Chart({
      chart: {
        type: "bar",
      },
      title: {
        text: null,
        style: {
          display: "none",
        },
      },
      credits: {
        enabled: false,
      },

      yAxis: {
        title: {
          text: "%",
        },
      },
      xAxis: {
        categories: [
          "Funds",
          "Delay in Procurement",
          "Labour Shortage",
          "Bad Planning",
          "Low Productivity",
          "Others"
        ],
      },
      legend: {
        enabled: false,
      },
      plotOptions: {
        series: {
          dataLabels: {
            enabled: true,
            format: "{point.y}",
          },
          showInLegend: false,
        },
      },
      tooltip: {
        pointFormat:
          '<span style="color:{point.color}"> </span>: <b>{point.y}%</b>',
      },
      series: [
        {
          type: "bar",
          color: "rgb(33, 101, 190)",
          data: [
            {
              name: "Funds",
              y: 25,
            },
            {
              name: "Delay in Procurement",
              y: 15,
            },
            {
              name: "Labour Shortage",
              y: 20,
            },
            {
              name: "Bad Planning",
              y: 20,
            },
            {
              name: "Low Productivity",
              y: 10,
            },
            {
              name: "Others",
              y: 10,
            },
          ],
        },
      ],
    });




    this.conversationChart = new Chart({
      chart: {
        type: "line",
      },
      title: {
        text: null,
        style: {
          display: "none",
        },
      },
      credits: {
        enabled: false,
      },
      legend: {
        enabled: false,
      },
      plotOptions: {
        series: {
          dataLabels: {
            enabled: true,
            format: "{point.y}",
          },
          showInLegend: true,
        },
      },
      tooltip: {
        pointFormat:
          '<span style="color:{point.color}">{point.name} count </span>: <b>{point.y}</b>',
      },

      xAxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      series: [
        {
          type: "line",
          color: "rgb(33, 101, 190)",
          data: [15, 40, 35, 30, 32, 25, 36, 20, 30, 28, 36, 39],
        },
      ],
    });
    this.disciplinePercentagePieChart = new Chart({
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: "pie",
      },
      title: {
        text: "",
      },
      tooltip: {
        pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
      },
      credits: {
        enabled: false,
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
          dataLabels: {
            enabled: true,
            format: "<br>{point.percentage:.1f} %",
            distance: -50,
          },
        },
      },
      series: [
        {
          type: "pie",
          // innerSize:'30%',
          name: "Share",
          data: [
            { name: "0 exceptions", y: 51, color: "rgb(26, 59, 204)" },
            { name: "1-2 exceptions", y: 23, color: "rgb(212, 87, 14)" },
            { name: "3-6 exceptions", y: 12, color: "grey" },
            { name: "6-10 exceptions", y: 7, color: "rgb(197, 185, 13)" },
            { name: "10+ exceptions", y: 7, color: "rgb(74, 120, 189)" },
          ],
        },
      ],
    });

    this.EmployeesOnboardedPieChart = new Chart({
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        plotBackgroundImage: null,
        type: "pie",
      },
      credits: {
        enabled: false,
      },
      title: {
        text: null,
      },
      yAxis: {
        title: {
          text: "No of Employees",
        },
      },
      tooltip: {
        pointFormat: "{series.name}:<b>{point.percentage:.1f}%</b>",
      },
      
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
          dataLabels: {
            enabled: true,
            format: "<br>{point.percentage:.1f} %",
            distance: -24,
          },
        },
      },
      series: [
        {
          type: "pie",
          
          name: "Share",
          data: [
            { name: "1st Qtr", y: 62, color: "rgb(26, 59, 204)" },
            { name: "2nd Qtr", y: 15, color: "rgb(212, 87, 14)" },
            { name: "3rd Qtr", y: 13, color: "grey" },
            { name: "4th Qtr", y: 10, color: "rgb(197, 185, 13)" },
          ],
        },
      ],
    });
  }

}
