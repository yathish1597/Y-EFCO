import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { getElement } from 'devextreme-angular';

@Component({
  selector: 'app-newproject-dashboard',
  templateUrl: './newproject-dashboard.component.html',
  styleUrls: ['./newproject-dashboard.component.scss']
})
export class NewprojectDashboardComponent implements OnInit {

  public tree= document.getElementById("tree");
  constructor(private titleService: Title) { }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  treeclick(){
    this.tree.click;
  }
  ngOnInit() {
    this.setTitle("EFCO | Project Dashboard");
  }

}