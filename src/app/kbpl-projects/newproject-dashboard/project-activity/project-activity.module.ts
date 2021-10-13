import { NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlertService } from '../../../shared/services/alert.service';
import { SharedModule } from '../../../shared/shared.module';
import { ProjectStatusLogComponent } from './project-status-log/project-status-log.component';

export const routes = [
    { path: '', redirectTo:'project-status-log', pathMatch: 'full'},
    {path:'project-status-log',component:ProjectStatusLogComponent,data: { breadcrumb: 'Task Log' }}
];

@NgModule({
  declarations: [ProjectStatusLogComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  providers: [AlertService],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  entryComponents:[]
})

export class ProjectActivityModule { }
