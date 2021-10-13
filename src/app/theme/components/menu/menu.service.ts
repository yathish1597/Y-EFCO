import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Menu } from './menu.model';
import { FixedSizeVirtualScrollStrategy } from '@angular/cdk/scrolling';

@Injectable()
export class MenuService {
  
  verticalMenuItems: any;
  horizontalMenuItems: any;
  userType: any;
  constructor(private location: Location, private router: Router) {
    this.userType = localStorage.getItem('userType');
    let permissions = [];
    let showMainMenus = {"admin":true};
    
    let temp = [];
    
    temp.push(
      new Menu(1, 'Dashboard', '/dashboard', null, 'analytics', null, true, 0, "white", "black", true),
      new Menu(2, 'Clients', '/clients', null, 'account_circle', null, true, 0, "white", "black", true),
      new Menu(4, 'Job Orders', '/joborders', null, 'business_center', null, true, 0, "white", "black", true),  
      // new Menu(5, 'Contracts', '/contracts', null, 'engineering', null, true, 0, "white", "black", true),      
      // new Menu(7, 'Purchase', '/purchase', null, 'request_quote', null, true, 0, "white", "black", true),      
      new Menu(8, 'Claims', '/claims', null, 'account_balance', null, true, 0, "white", "black", true),
      new Menu(9, 'Admin', '/admin', null, 'admin_panel_settings', null, true, 0, "white", "black", true), 

      new Menu(10, 'Manage Users', '/admin/manage-users', null, 'group_add', null, false, 9, "white", "black", true),
      new Menu(15, 'Manage Personnel', '/admin/manage-personnel', null, 'toc', null, false, 9, "white", "black", true),
      new Menu(11, 'Master Data', '/admin/master-data', null, 'swap_horiz', null, true, 9, "white", "black", true),
      
      new Menu(12, 'Lookup Options', '/admin/lookup-options', null, 'search', null, false, 9, "white", "black", true),
      new Menu(14, 'Event-Log', '/admin/event-log', null, 'list_alt ', null, false, 9, "white", "black", true),
      new Menu(16, 'Error-Log', '/admin/error-log', null, 'error', null, false, 9, "white", "black", true),
      new Menu(13, 'Settings', '/admin/settings', null, 'settings_applications', null, false, 9, "white", "black", true),
     
      );
      
      this.verticalMenuItems = temp;
      this.horizontalMenuItems = temp;
    }
    
    public getVerticalMenuItems(): Array<Menu> {
      return this.verticalMenuItems;
    }
    
    public getHorizontalMenuItems(): Array<Menu> {
      return this.horizontalMenuItems;
    }
    
    public expandActiveSubMenu(menu: Array<Menu>) {
      let url = this.location.path();
      let routerLink = url; // url.substring(1, url.length);
      let activeMenuItem = menu.filter(item => item.routerLink === routerLink);
      if (activeMenuItem[0]) {
        let menuItem = activeMenuItem[0];
        while (menuItem.parentId != 0) {
          let parentMenuItem = menu.filter(item => item.id == menuItem.parentId)[0];
          menuItem = parentMenuItem;
          this.toggleMenuItem(menuItem.id);
        }
      }
    }
    
    public toggleMenuItem(menuId) {
      let menuItem = document.getElementById('menu-item-' + menuId);
      let subMenu = document.getElementById('sub-menu-' + menuId);
      if (subMenu) {
        if (subMenu.classList.contains('show')) {
          subMenu.classList.remove('show');
          menuItem.classList.remove('expanded');
        }
        else {
          subMenu.classList.add('show');
          menuItem.classList.add('expanded');
        }
      }
    }
    
    public closeOtherSubMenus(menu: Array<Menu>, menuId) {
      let currentMenuItem = menu.filter(item => item.id == menuId)[0];
      if (currentMenuItem.parentId == 0 && !currentMenuItem.target) {
        menu.forEach(item => {
          if (item.id != menuId) {
            let subMenu = document.getElementById('sub-menu-' + item.id);
            let menuItem = document.getElementById('menu-item-' + item.id);
            if (subMenu) {
              if (subMenu.classList.contains('show')) {
                subMenu.classList.remove('show');
                menuItem.classList.remove('expanded');
              }
            }
          }
        });
      }
    }
    
    
  }
  