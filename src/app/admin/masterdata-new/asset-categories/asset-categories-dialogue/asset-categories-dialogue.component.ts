import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-asset-categories-dialogue',
  templateUrl: './asset-categories-dialogue.component.html',
  styleUrls: ['./asset-categories-dialogue.component.scss']
})
export class AssetCategoriesDialogueComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AssetCategoriesDialogueComponent>) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
