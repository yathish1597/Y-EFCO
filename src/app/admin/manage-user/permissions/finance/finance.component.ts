import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.scss']
})
export class FinanceComponent implements OnInit {

  constructor() { }

  items = [
    {screen:'Receivables - Ageing Analysis ',create: false, read: true, update: false, delete: false},
    {screen:'Receivables - Ageing Analysis - Invoices',create: false, read: true, update: false, delete: false},
    {screen:'Receivables - Grid View ',create: false, read: true, update: false, delete: false},
    {screen:'Receivables - Grid View - Payments',create: true, read: true, update: true, delete: true},
    {screen:'Payables - Grid View',create: true, read: true, update: true, delete: true},
    {screen:'Payables - Grid View - Payments',create: true, read: true, update: true, delete: true}
  ];

  ngOnInit() {
  }

}
