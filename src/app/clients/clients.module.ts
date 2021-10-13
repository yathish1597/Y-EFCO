import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { GridViewComponent } from './grid-view/grid-view.component';
import { AlertService } from 'src/app/shared/services/alert.service';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { ProjectsDialogComponent } from './projects-dialog/projects-dialog.component';
import { AddClientDialogComponent } from './add-client-dialog/add-client-dialog.component';
import { GridViewClientsComponent } from './grid-view/grid-view-clients/grid-view-clients.component';

export const routes = [
  { path: '', component: GridViewComponent, pathMatch:'full' },
  { path: 'Clients', component: GridViewComponent, data: { breadcrumb: "" } },
];

@NgModule({
  declarations: [ GridViewComponent, ProjectsDialogComponent, AddClientDialogComponent, GridViewClientsComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  providers: [AlertService],
  entryComponents:[AddClientDialogComponent,ProjectsDialogComponent,DeleteConfirmDialogComponent, GridViewClientsComponent]
})
export class ClientsModule { }
