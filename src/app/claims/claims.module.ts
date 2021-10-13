import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AlertService } from 'src/app/shared/services/alert.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChartModule } from 'angular-highcharts';
import { DxGanttModule } from 'devextreme-angular';
import { ActiveComponent } from './active/active.component';
import { ArchivesComponent } from './archives/archives.component';
import { AttachmentModelComponent } from './active/attachment-model/attachment-model.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogModule } from '@angular/material';
import { ArchivesAttachmentPopupComponent } from './archives-attachment-popup/archives-attachment-popup.component';




export const routes = [
    { path: '', redirectTo: 'active', pathMatch: 'full' }, 
    { path: 'active', component: ActiveComponent, data: { breadcrumb: 'Manage Claims' }},
    {path: 'archives', component: ArchivesComponent, data: { breadcrumb: 'Manage Claims' }}    
]; 

@NgModule({
  declarations: [ActiveComponent, ArchivesComponent, AttachmentModelComponent, ArchivesAttachmentPopupComponent],
  imports: [ChartModule,
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    OwlDateTimeModule,OwlNativeDateTimeModule,
    ReactiveFormsModule,
    FormsModule,
    DxGanttModule,
    NgbModalModule,
    MatDialogModule   
    
  ],
  entryComponents: [
    AttachmentModelComponent,
    ArchivesAttachmentPopupComponent,
    
    
  ],
  providers: [AlertService],
})
export class ClaimsModule { }
