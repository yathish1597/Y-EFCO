import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Notes1Component } from './notes1/notes1.component';
import { Notes2Component } from './notes2/notes2.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

export const routes=[
  { path: '', redirectTo: 'notes1', pathMatch: 'full' },
  { path: 'notes1', component:Notes1Component,data: { breadcrumb: 'Project-Updates' } },
  { path: 'notes2', component:Notes2Component,data: { breadcrumb: 'Project-Updates' } },
]

@NgModule({
  declarations: [Notes1Component, Notes2Component],
  imports: [
    CommonModule, SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class ProjectNotesModule { }
