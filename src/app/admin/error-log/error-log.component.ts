import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-log',
  templateUrl: './error-log.component.html',
  styleUrls: ['./error-log.component.scss']
})
export class ErrorLogComponent implements OnInit {

  public pageSize = parseInt(localStorage.getItem('settings') ? localStorage.getItem('settings') : '10');
  public currentPage = 0;
  public totalSize = 0;

  filterToggle = false;

  constructor() { }

  ngOnInit() {
  }

  values = 

  [  
  ]

}
