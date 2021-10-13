import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-log',
  templateUrl: './event-log.component.html',
  styleUrls: ['./event-log.component.scss']
})
export class EventLogComponent implements OnInit {
  public pageSize = parseInt(localStorage.getItem('settings') ? localStorage.getItem('settings') : '10');
  public currentPage = 0;
  public totalSize = 0;
  filterToggle = false;
  constructor() { }

  ngOnInit() {
  }

  values = 

  [  {eventsource : "Web", screen: "Dashboard", eventtype: "Read", eventdescription: "User accessed Dashboard Screen", username: "Admin EFCO", timestamp :"03-Sep-2021 10:30Am"},
  {eventsource : "Web", screen: "Login", eventtype: "Login/Logout", eventdescription: "User logged in Successfully", username: "Admin EFCO", timestamp :"03-Sep-2021 10:30Am"},
  {eventsource : "Web", screen: "Login", eventtype: "Login/Logout", eventdescription: "A user attempted to log in", username: "-", timestamp :"03-Sep-2021 10:30Am"},
  {eventsource : "Web", screen: "Manage Users", eventtype: "Read", eventdescription: "User accessed Manage User Screen", username: "Admin EFCO", timestamp :"03-Sep-2021 10:19Am"},
  {eventsource : "Web", screen: "Claims", eventtype: "Read", eventdescription: "User accessed Claims Screen", username: "Admin EFCO", timestamp :"02-Sep-2021 23:30Am"},
  {eventsource : "Web", screen: "Manage Job Orders", eventtype: "Read", eventdescription: "User accessed Manage Job Orders Screen", username: "Admin EFCO", timestamp :"02-Sep-2021 14:37Am"},
  ]
}
