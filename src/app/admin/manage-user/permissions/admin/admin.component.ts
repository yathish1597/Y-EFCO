import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor() { }

  items = [
    {screen:'Users',create: true, read: true, update: true, delete: true},
    {screen:'Users - Projects',create: false, read: true, update: true, delete: false},
    {screen:'Roles',create: true, read: true, update: true, delete: true},
    {screen:'Roles - Users',create: true, read: true, update: true, delete: true},
    {screen:'Roles - Screen Permissions',create: true, read: true, update: true, delete: true},
    {screen:'Roles - Special Permissions',create: true, read: true, update: true, delete: true},
    {screen:'Master Data - Action Types',create: true, read: true, update: true, delete: true},
    {screen:'Master Data - Expense Codes',create: true, read: true, update: true, delete: true},
    {screen:'Master Data - Project Types',create: true, read: true, update: true, delete: true},
    {screen:'Master Data - Actions',create: true, read: true, update: true, delete: true},
    {screen:'Master Data - Industry Master',create: true, read: true, update: true, delete: true},
    {screen:'Master Data - Country Master',create: true, read: true, update: true, delete: true},
    {screen:'Master Data - Country Master - States',create: true, read: true, update: true, delete: true},
    {screen:'Master Data - Country Master - City',create: true, read: true, update: true, delete: true},
    {screen:'Master Data - Site Master',create: true, read: true, update: true, delete: true},
    {screen:'Master Data - Site Master - Contract',create: true, read: true, update: true, delete: true},
    {screen:'Master Data - Lead Sources',create: true, read: true, update: true, delete: true},
    {screen:'Lookup Options',create: true, read: true, update: true, delete: true},
    {screen:'Settings',create: false, read: true, update: true, delete: false}
  ];

  ngOnInit() {
  }

}
