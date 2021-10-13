import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-permissions',
  templateUrl: './client-permissions.component.html',
  styleUrls: ['./client-permissions.component.scss']
})
export class ClientPermissionsComponent implements OnInit {

  constructor() { }

  items = [
    {screen:'Clients',create: true, read: true, update: true, delete: true},
    {screen:'Projects',create: false, read: true, update: false, delete: false},
  ];

  ngOnInit() {
  }

}
