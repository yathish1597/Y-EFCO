import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractComponent } from './contract/contract.component';
import { RouterModule } from '@angular/router';
import { PermanentComponent } from './permanent/permanent.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddEmployeeComponent } from './permanent/add-employee/add-employee.component';
import { ContractEmployeesService } from 'src/app/shared/services/contract-employees.service';
import { PermanentEmployeesService } from 'src/app/shared/services/permanent-employees.service';
import { RolesService } from 'src/app/shared/services/roles.service';

export const routes = [
  { path: '', redirectTo: 'permanent', pathMatch: 'full' },
  {path: 'permanent', component: PermanentComponent},
  {path: 'contract', component: ContractComponent}
]

@NgModule({
  declarations: [PermanentComponent, ContractComponent, AddEmployeeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  entryComponents:[
  AddEmployeeComponent
  ],
  providers: [ContractEmployeesService, PermanentEmployeesService, RolesService]
})
export class ManagePersonnelModule { }
