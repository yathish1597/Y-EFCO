import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes-permission',
  templateUrl: './quotes-permission.component.html',
  styleUrls: ['./quotes-permission.component.scss']
})
export class QuotesPermissionComponent implements OnInit {

  constructor() { }

  items = [
    {screen:'Quotes',create: true, read: true, update: true, delete: true},
    {screen:'Budget - Dashboard',create: false, read: true, update: true, delete: true},
    {screen:'Budget - Setup',create: true, read: true, update: true, delete: true},
    {screen:'Overview',create: false, read: true, update: true, delete: false},
    {screen:'BOQ',create: true, read: true, update: true, delete: true},
    {screen:'Updates - Notes',create: true, read: true, update: true, delete: true},
    {screen:'Updates - Photos',create: true, read: true, update: false, delete: true},
    {screen:'Task Log',create: false, read: true, update: false, delete: false},
    {screen:'Docs',create: true, read: true, update: true, delete: true}
  ];

  ngOnInit() {
  }

}
