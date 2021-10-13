import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radar-permissions',
  templateUrl: './radar-permissions.component.html',
  styleUrls: ['./radar-permissions.component.scss']
})
export class RadarPermissionsComponent implements OnInit {

  constructor() { }

  items = [
    {screen:'Radar',create: false, read: true, update: false, delete: false}
  ];

  ngOnInit() {
  }

}
