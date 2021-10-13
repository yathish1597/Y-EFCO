import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-condition',
  templateUrl: './condition.component.html',
  styleUrls: ['./condition.component.scss']
})
export class ConditionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  allFields = [1];
  removeItem(index){
    this.allFields.splice(index, 1);
  }
  
  remove(e) {
    document.getElementById("repeat-" + e).remove();
  }
}
