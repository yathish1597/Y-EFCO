import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-action-summary-view',
  templateUrl: './action-summary-view.component.html',
  styleUrls: ['./action-summary-view.component.scss']
})
export class ActionSummaryViewComponent implements OnInit {

  view: number
  week: number
  items;
  noData: boolean = false;
  buttonSelected:boolean = true;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.view = +this.route.snapshot.params['view'];
    this.week = +this.route.snapshot.params['week'];

    this.route.params.subscribe((params: Params) => {
      this.view = +params['view'];
      this.week = +params['week'];
      this.tableData();
    });
  }

  tableData() {
    if(this.week === 2) {
      this.items = [
        { UserName: 'Option Matrix', SundayCount: '0.00', MondayCount: '9.00', TuesdayCount: '0.00', WednesdayCount: '0.00', ThrusdayCount: '0.00', FridayCount: '0.00', SaturdayCount: '0.00', TotalCount: '9.00' }, 
      ]
    } else if (this.week === 1) {
      this.items = [
        { UserName: 'Sachin Patil', SundayCount: '0.00', MondayCount: '14.00', TuesdayCount: '16.00', WednesdayCount: '16.00', ThrusdayCount: '16.00', FridayCount: '8.00', SaturdayCount: '0.00', TotalCount: '70.00' }, 
        { UserName: 'Option Matrix', SundayCount: '0.00', MondayCount: '16.00', TuesdayCount: '16.00', WednesdayCount: '16.00', ThrusdayCount: '14.00', FridayCount: '16.00', SaturdayCount: '0.00', TotalCount: '78.00' }, 
      ]
    }
  }

  showData() {
    this.noData = false;
  }

  hideData() {
    this.noData = true;
  }

  buttonPressed() {
    this.buttonSelected = !this.buttonSelected;
  }


}
