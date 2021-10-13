import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.scss']
})
export class AssetsComponent implements OnInit {

  constructor() { }

  items = [
    {screen:'Asset Master',create: true, read: true, update: true, delete: true},
    {screen:'Asset Master - PM Checklist',create: true, read: true, update: true, delete: true},
    {screen:'Asset Master - Monitoring',create: true, read: true, update: true, delete: true},
    {screen:'Asset Log',create: true, read: true, update: true, delete: true},
    {screen:'PM Activity - Grid View',create: true, read: true, update: true, delete: true},
    {screen:'PM Activity - Grid View - Checklist',create: true, read: true, update: true, delete: true},
    {screen:'PM Activity - Calendar View',create: false, read: true, update: false, delete: false},
    {screen:'Monitoring',create: true, read: true, update: true, delete: true},
    {screen:'Monitoring Audit',create: true, read: true, update: true, delete: true},
    {screen:'Breakdown Repairs - Grid view',create: true, read: true, update: true, delete: true},
    {screen:'Breakdown Repairs - Calendar view',create: false, read: true, update: false, delete: false},
    {screen:'Activcity Log - Grid View',create: true, read: true, update: true, delete: true},
    {screen:'Activcity Log - Calendar View',create: false, read: true, update: false, delete: false},
    {screen:'Asset Transfer',create: true, read: true, update: true, delete: true}
  ];

  ngOnInit() {
  }

}
