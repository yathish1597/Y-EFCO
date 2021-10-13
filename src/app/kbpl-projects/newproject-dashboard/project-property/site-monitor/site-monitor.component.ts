import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-monitor',
  templateUrl: './site-monitor.component.html',
  styleUrls: ['./site-monitor.component.scss']
})
export class SiteMonitorComponent implements OnInit {

  constructor() { }

  allFields = [1];
  removeItem(index){
    this.allFields.splice(index, 1);
  }
  
  remove(e) {
    document.getElementById("repeat-" + e).remove();
  }
  ngOnInit() {
  }

}
