import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddImageComponent } from '../add-image/add-image.component';

@Component({
  selector: 'app-photos1',
  templateUrl: './photos1.component.html',
  styleUrls: ['./photos1.component.scss']
})
export class Photos1Component implements OnInit {

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
