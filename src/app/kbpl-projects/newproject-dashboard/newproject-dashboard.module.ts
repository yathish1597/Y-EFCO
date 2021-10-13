import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProjectActivityComponent } from './project-activity/project-activity.component';
import { ProjectManageComponent } from './project-manage/project-manage.component';
import { ProjectSummaryComponent } from './project-summary/project-summary.component';
import { ProjectNewActionComponent } from './project-manage/project-new-action/project-new-action.component';
import { ProjectUpdateSowComponent } from './project-manage/project-update-sow/project-update-sow.component';
import { ProjectContractsComponent } from './project-contracts/project-contracts.component';
import { ProjectPropertyComponent } from './project-property/project-property.component';
import { ProjectContractGridcolumnComponent } from './project-contracts/project-contract-gridcolumn/project-contract-gridcolumn.component';
// import { ProjectSchedulingComponent } from './project-scheduling/project-scheduling.component';
import { ManageDialogComponent } from './project-manage/manage-dialog/manage-dialog.component';
import { AddContractsComponent } from './project-contracts/add-contracts/add-contracts.component';
// import { ProjectRequisitionsComponent } from './project-requisitions/project-requisitions.component';
// import { AddRequisitionComponent } from './project-requisitions/add-requisition/add-requisition.component';
import { ProjectUpdatesComponent } from './project-updates/project-updates.component';
import { ProjectNotesComponent } from './project-updates/project-notes/project-notes.component';
import { AddImageComponent } from './project-updates/project-photos/add-image/add-image.component';
import { ProjectDocumentComponent } from './project-document/project-document.component';
import { AddPreviousComponent } from './project-document/add-previous/add-previous.component';
import { AddDocumentComponent } from './project-document/add-document/add-document.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { DragulaModule } from 'ng2-dragula';
import { DndModule } from 'ngx-drag-drop';
import { DragDropModule, PanelMenuModule } from 'primeng/primeng';
import { EditContractsComponent } from './project-contracts/edit-contracts/edit-contracts.component';
// import { EditRequisitionComponent } from './project-requisitions/edit-requisition/edit-requisition.component';
import { EditDocumentComponent } from './project-document/edit-document/edit-document.component';
import { UploadDocumentComponent } from './project-document/upload-document/upload-document.component';
import { JobCardComponent } from './project-manage/job-card/job-card.component';
import { JobcardsComponent } from './jobcards/jobcards.component';
import { AddjobcardComponent } from './jobcards/addjobcard/addjobcard.component';
import { SparesComponent } from './spares/spares.component';
import { AddSpareModelComponent } from './spares/add-spare-model/add-spare-model.component';
import { GlandpackingModelComponent } from './spares/add-spare-model/glandpacking-model/glandpacking-model.component';
import { ConsumablemodalComponent } from './jobcards/consumablemodal/consumablemodal.component';
import { ProjectAddSowComponent } from './project-manage/project-add-sow/project-add-sow.component';
import { ProjectExecutionComponent } from './project-execution/project-execution.component';
import { DepositComponent } from './deposit/deposit.component';
import { RevenueModelComponent } from './deposit/revenue-model/revenue-model.component';
import { ContractEmployeesService } from 'src/app/shared/services/contract-employees.service';
import { PermanentEmployeesService } from 'src/app/shared/services/permanent-employees.service';
import { RolesService } from 'src/app/shared/services/roles.service';




export const routes = [
  { path: '', redirectTo: 'POW', pathMatch: 'full' },
  { path: 'jobcards', component: JobcardsComponent, data: { breadcrumb: 'Job Cards' } },
  { path: 'spares', component: SparesComponent , data: { breadcrumb: 'Spares' } },
  { path: 'jobcard', component: ProjectManageComponent, loadChildren:'./project-manage/project-manage.module#ProjectManageModule', data: { breadcrumb: 'Job Cards' }},
  { path: 'task-log', component: ProjectActivityComponent, loadChildren: './project-activity/project-activity.module#ProjectActivityModule', data: { breadcrumb: 'Task Log' } },
  { path: 'POW', component: ProjectPropertyComponent,loadChildren:'./project-property/project-property.module#ProjectPropertyModule', data: { breadcrumb: 'Plan Of Work' } },
  { path: 'project-execution', component: ProjectExecutionComponent},
  {path: 'deposit', component: DepositComponent},
  { path: 'team', component: ProjectContractsComponent, data: { breadcrumb: 'Team' } },
  { path: 'service-reports', component: ProjectSummaryComponent, loadChildren: './project-summary/project-summary.module#ProjectSummaryModule', data: { breadcrumb: 'Service Reports' } },
  { path: 'project-updates', component: ProjectUpdatesComponent,loadChildren: './project-updates/project-updates.module#ProjectUpdatesModule', data: { breadcrumb: 'Project-Updates' } },
  { path: 'project-document', component: ProjectDocumentComponent, data: { breadcrumb: 'Documents' } },
]
@NgModule({
  declarations: [ProjectActivityComponent, ProjectPropertyComponent, SparesComponent, AddSpareModelComponent, GlandpackingModelComponent,
    ProjectManageComponent, 
    ProjectSummaryComponent, ProjectAddSowComponent, ProjectNewActionComponent, 
    ProjectUpdateSowComponent, ProjectContractsComponent,
     ProjectContractGridcolumnComponent,ManageDialogComponent,AddContractsComponent, 
    ProjectUpdatesComponent,EditContractsComponent, ProjectDocumentComponent,
     AddPreviousComponent, AddDocumentComponent, EditDocumentComponent, UploadDocumentComponent,UploadDocumentComponent, JobcardsComponent, AddjobcardComponent, ConsumablemodalComponent, ProjectExecutionComponent, DepositComponent, RevenueModelComponent ],
  imports: [
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,DragulaModule.forRoot(),
    OwlDateTimeModule,OwlNativeDateTimeModule,DndModule,DragDropModule,MglTimelineModule, PanelMenuModule
  ],
  providers: [AlertService, ContractEmployeesService, PermanentEmployeesService, RolesService],
  entryComponents: [
    AddSpareModelComponent,
    GlandpackingModelComponent,
    ProjectContractGridcolumnComponent,
    ProjectAddSowComponent,
    ProjectNewActionComponent,
    ProjectUpdateSowComponent,
    ManageDialogComponent,
    AddContractsComponent,
    AddPreviousComponent,
    AddDocumentComponent,
    EditContractsComponent,EditDocumentComponent,
    UploadDocumentComponent,
    AddjobcardComponent,
    ConsumablemodalComponent,
    RevenueModelComponent
  ]
})
export class NewprojectDashboardModule { }
