import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Photos1Component } from './photos1/photos1.component';
import { Photos2Component } from './photos2/photos2.component';
import { RouterModule } from '@angular/router';
import { AddImageComponent } from './add-image/add-image.component';
import { MatButtonModule, MatDialogModule, MatIconModule, MatRadioModule } from '@angular/material';
import { AddimgComponent } from './addimg/addimg.component';

export const routes=[
  { path: '', redirectTo: 'photos1', pathMatch: 'full' },
  { path: 'photos1', component:Photos1Component,data: { breadcrumb: 'Project-Updates' } },
  { path: 'photos2', component:Photos2Component,data: { breadcrumb: 'Project-Updates' } },
]

@NgModule({
  declarations: [Photos1Component, Photos2Component],
  imports: [ 
    CommonModule,
    RouterModule.forChild(routes),
    MatDialogModule,
    MatRadioModule,
    MatIconModule,
    MatButtonModule

  ],
  entryComponents:[]
})
export class ProjectPhotosModule { }
