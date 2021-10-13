import { Component, OnInit, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AppSettings } from '../../../../app.settings';
import { Settings } from '../../../../app.settings.model';
import { MatMenuTrigger } from '@angular/material';
import { TourService } from "ngx-tour-ngx-bootstrap";
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-horizontal-menu',
  templateUrl: './horizontal-menu.component.html',
  styleUrls: ['./horizontal-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [ MenuService ]
})
export class HorizontalMenuComponent implements OnInit {
  @Input('menuParentId') menuParentId;
  public menuItems:Array<any>;
  public settings: Settings;
  public currentYear: String;
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  constructor(public appSettings:AppSettings, public menuService:MenuService, public router:Router,public tourService: TourService) { 
    this.settings = this.appSettings.settings;
    this.tourService.initialize(
      [
        {
          anchorId: '1',
          content: 'This screen provides a full summary of the system in a graphical format',
          placement: 'bottom',
          title: 'Analytics'
        },
        {
          anchorId: '2',
          content:'The list of client data relevant to the projects is listed here. It is possible to add and manage client data here',
          placement: 'bottom',
          title: 'Clients'
        },
        {
          anchorId: '3',
          content: 'The list of scheduled projects, deliverables, and milestones is preserved here on the screen for project management and scheduling. This module typically contains the scheduled start and end date, length and resources allocated to each operation',
          placement: 'bottom',
          title: 'Projects'
        },
        {
          anchorId: '4',
          content: "This screen provides all the details of a shipment and to monitor them accordingly",
          placement: 'bottom',
          title: 'Logistics'
        },
        {
          anchorId: '5',
          content: 'This module is intended to set up the basic infrastructure that is needed to properly run the application',
          placement: 'bottom',
          title: 'Admin'
        }
      ],
      {
        route: '/radar'
      }
    );
  }

  ngOnInit() {
    this.currentYear = ''+ (new Date()).getFullYear();
    this.menuItems = this.menuService.getHorizontalMenuItems();
    this.menuItems = this.menuItems.filter(item => item.parentId == this.menuParentId);
  }

  ngAfterViewInit(){
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if(this.settings.fixedHeader){
          let mainContent = document.getElementById('main-content');
          if(mainContent){
            mainContent.scrollTop = 0;
          }
        }
        else{
          document.getElementsByClassName('mat-drawer-content')[0].scrollTop = 0;
        }
      }                
    });
  } 

}