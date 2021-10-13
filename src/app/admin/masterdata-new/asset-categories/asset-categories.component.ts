import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AssetCategoriesDialogueComponent } from './asset-categories-dialogue/asset-categories-dialogue.component';

@Component({
  selector: 'app-asset-categories',
  templateUrl: './asset-categories.component.html',
  styleUrls: ['./asset-categories.component.scss']
})
export class AssetCategoriesComponent implements OnInit {

  items = [
    {asset: 'Dump truck', prefix: 'DT', status: true},
    {asset: 'Backhole Loader', prefix: 'BL', status: true},
    {asset: 'Excavator', prefix: 'EX', status: true},
    {asset: 'Wheel Tractor Scrapers', prefix: 'WT', status: true},
    {asset: 'Trenchers', prefix: 'TR', status: true},
    {asset: 'Graders', prefix: 'GR', status: true},
  ]

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openActionTypeDialog(value) {
    let dialogRef = this.dialog.open(AssetCategoriesDialogueComponent, {
      data: value,
      height: 'auto',
      width: '600px',
  });
  }

}
