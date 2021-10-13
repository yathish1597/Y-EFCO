import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddImageComponent } from '../add-image/add-image.component';

@Component({
  selector: 'app-photos2',
  templateUrl: './photos2.component.html',
  styleUrls: ['./photos2.component.scss']
})
export class Photos2Component implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  public addNewImage(id){
    let dialogRef = this.dialog.open(AddImageComponent, {
      data: id,
      height: 'auto',
      width: '600px'
  });
  dialogRef.afterClosed().subscribe(data => {
  });
  }

}
