import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ConditionComponent} from './condition/condition.component';
import { JobcarddetailsComponent } from './jobcarddetails/jobcarddetails.component'
import { MatButtonModule, MatCardModule, MatDialogModule, MatIconModule, MatSelectModule } from '@angular/material';
import { RepairDetailsComponent } from './repair-details/repair-details.component';
import { ReplacementComponent } from './replacement/replacement.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { JobCardComponent } from './job-card/job-card.component';
import { SparesComponent } from './job-card/spares/spares.component';
import { AddSpareModelComponent } from './job-card/spares/add-spare-model/add-spare-model.component';
import { GlandpackingModelComponent } from './job-card/spares/add-spare-model/glandpacking-model/glandpacking-model.component';
import { AddjobcardModelComponent } from './job-card/addjobcard-model/addjobcard-model.component';
import { PreviewComponent } from './preview/preview.component';
import { Jobcarddetails1Component } from './jobcarddetails1/jobcarddetails1.component';
import { Condition1Component } from './condition1/condition1.component';
import { Replacement1Component } from './replacement1/replacement1.component';
import { RepairDetails1Component } from './repair-details1/repair-details1.component';
import { Preview1Component } from './preview1/preview1.component';

export const routes = [
  {path:'', component:JobCardComponent, pathMatch: 'full'},
  {path:'jobcard', component: JobCardComponent, data: { breadcrumb: 'Job Cards' }},
  {path:'condition', component:ConditionComponent, data: { breadcrumb: 'Job Cards' }},
  {path:'jobcarddetails', component:JobcarddetailsComponent, data: { breadcrumb: 'Job Cards' }},
  {path:'repairdetails', component: RepairDetailsComponent, data: { breadcrumb: 'Job Cards' }},
  {path: 'replacement', component: ReplacementComponent, data: { breadcrumb: 'Job Cards' }},
  {path: 'preview', component: PreviewComponent, data: { breadcrumb: 'Job Cards' }},
  {path:'condition1', component:Condition1Component, data: { breadcrumb: 'Job Cards' }},
  {path:'jobcarddetails1', component:Jobcarddetails1Component, data: { breadcrumb: 'Job Cards' }},
  {path:'repairdetails1', component: RepairDetails1Component, data: { breadcrumb: 'Job Cards' }},
  {path: 'replacement1', component: Replacement1Component, data: { breadcrumb: 'Job Cards' }},
  // {path: 'spares', component : SparesComponent}
  {path: 'preview1', component: Preview1Component, data: { breadcrumb: 'Job Cards' }}
  
]

@NgModule({
  declarations: [ConditionComponent, JobcarddetailsComponent, RepairDetailsComponent, ReplacementComponent, JobCardComponent, AddjobcardModelComponent, PreviewComponent, Jobcarddetails1Component, Condition1Component, Replacement1Component, RepairDetails1Component, Preview1Component,
    SparesComponent, AddSpareModelComponent, GlandpackingModelComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
    MatCardModule,
    MatSelectModule,
    MatDialogModule,
    MatButtonModule,
    SharedModule
  ],
  entryComponents:[
    // AddSpareModelComponent,
    // GlandpackingModelComponent
  ]
})


export class ProjectManageModule { }
