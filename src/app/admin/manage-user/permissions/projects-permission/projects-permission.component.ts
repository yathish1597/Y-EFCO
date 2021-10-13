import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-permission',
  templateUrl: './projects-permission.component.html',
  styleUrls: ['./projects-permission.component.scss']
})
export class ProjectsPermissionComponent implements OnInit {

  constructor() { }

  items = [
    {screen: 'Projects', create : true, read: true, update: true, delete: true},
    {screen: 'Projects dashboard - WBS dashboard', create : false, read: true, update: true, delete: true},
    {screen: 'Projects dashboard - WBS Setup', create : true, read: true, update: true, delete: true},
    {screen: 'Projects dashboard - Overview', create : false, read: true, update: true, delete: false},
    {screen: 'Projects dashboard - Budget dashboard', create : false, read: true, update: true, delete: false},
    {screen: 'Projects dashboard - Budget Setup', create : true, read: true, update: true, delete: true},
    {screen: 'Projects dashboard - BOQ', create : true, read: true, update: true, delete: true},
    {screen: 'Projects dashboard - Contracts', create : true, read: true, update: true, delete: true},
    {screen: 'Projects dashboard - Scheduling', create : false, read: true, update: false, delete: false},
    {screen: 'Projects dashboard - Activity', create : false, read: true, update: true, delete: false},
    {screen: 'Projects dashboard - Updates Notes', create : true, read: true, update: true, delete: true},
    {screen: 'Projects dashboard - Updates Photos', create : true, read: true, update: false, delete: true},
    {screen: 'Projects dashboard - Hours', create : false, read: true, update: false, delete: false},
    {screen: 'Projects dashboard - Expenses', create : false, read: true, update: false, delete: false},
    {screen: 'Projects dashboard - Requisitions', create : true, read: true, update: true, delete: true},
    {screen: 'Projects dashboard - Issues', create : true, read: true, update: true, delete: true},
    {screen: 'Projects dashboard - Summary Report - Progress', create : true, read: false, update: false, delete: false},
    {screen: 'Projects dashboard - Summary Report - Financial', create : true, read: false, update: false, delete: false},
    {screen: 'Projects dashboard - Tasklog', create : false, read: true, update: false, delete: false},
    {screen: 'Projects dashboard - Docs', create : true, read: true, update: true, delete: true}
  ];

  ngOnInit() {
  }

}
