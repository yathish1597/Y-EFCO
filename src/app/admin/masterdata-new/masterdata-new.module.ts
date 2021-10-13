import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ActionTypesComponent } from './action-types/action-types.component';
import { ActionsComponent } from './actions/actions.component';
import { AssetCategoriesComponent } from './asset-categories/asset-categories.component';
import { ExpenseCodeComponent } from './expense-code/expense-code.component';
import { JobCodesComponent } from './job-codes/job-codes.component';
import { ProjectTypesComponent } from './project-types/project-types.component';
import { ActionTypeDialogueComponent } from './action-types/action-type-dialogue/action-type-dialogue.component';
import { JobCodesDialogueComponent } from './job-codes/job-codes-dialogue/job-codes-dialogue.component';
import { ExpenseCodeDialogueComponent } from './expense-code/expense-code-dialogue/expense-code-dialogue.component';
import { AssetCategoriesDialogueComponent } from './asset-categories/asset-categories-dialogue/asset-categories-dialogue.component';
import { ProjectTypesDialogueComponent } from './project-types/project-types-dialogue/project-types-dialogue.component';
import { ActionsDialogueComponent } from './actions/actions-dialogue/actions-dialogue.component';
import { IndustryComponent } from './industry/industry.component';
import { CountryComponent } from './country/country.component';
import { StateComponent } from './country/state/state.component';
import { CityComponent } from './country/city/city.component';
import { AddIndustryComponent } from './industry/add-industry/add-industry.component';
import { AddCountryComponent } from './country/add-country/add-country.component';
import { AddStateComponent } from './country/add-state/add-state.component';
import { AddCityComponent } from './country/add-city/add-city.component';
import { ItemMasterComponent } from './item-master/item-master.component';
import { SiteMasterComponent } from './site-master/site-master.component';
import { CatMasterComponent } from './cat-master/cat-master.component';
import { LeadSourceComponent } from './lead-source/lead-source.component';
import { AddItemComponent } from './item-master/add-item/add-item.component';
import { AddLeadComponent } from './lead-source/add-lead/add-lead.component';
import { AddCatComponent } from './cat-master/add-cat/add-cat.component';
import { AddSiteComponent } from './site-master/add-site/add-site.component';
import { ContractComponent } from './site-master/contract/contract.component';
import { AddContractComponent } from './site-master/add-contract/add-contract.component';
import { MaterialComponent } from './site-master/material/material.component';
import { AddMaterialComponent } from './site-master/add-material/add-material.component';
import { ConsumableComponent } from './consumable/consumable.component';
import { AddConsumableComponent } from './consumable/add-consumable/add-consumable.component';

export const routes = [
  { path: '', redirectTo: 'industry', pathMatch: 'full' },
  { path: 'action-types', component: ActionTypesComponent, data: { breadcrumb: 'Manage User' }},
  { path: 'actions', component: ActionsComponent, data: { breadcrumb: 'Manage User' } },
  { path: 'asset-categories', component: AssetCategoriesComponent, data: { breadcrumb: 'Manage User' }},
  // { path: 'expense-code', component: ExpenseCodeComponent, data: { breadcrumb: 'Manage User' } },
  { path: 'job-codes', component: JobCodesComponent, data: { breadcrumb: 'Manage User' }},
  { path: 'project-types', component: ProjectTypesComponent, data: { breadcrumb: 'Manage User' } },
  { path: 'industry', component: IndustryComponent, data: { breadcrumb: 'Manage User' } },
  { path: 'country', component: CountryComponent, data: { breadcrumb: 'Manage User' } },
  { path: 'state', component: StateComponent, data: { breadcrumb: 'Manage User' } },
  { path: 'city', component: CityComponent, data: { breadcrumb: 'Manage User' } },
  { path: 'item', component: ItemMasterComponent, data: { breadcrumb: 'Manage User' } },
  { path: 'site', component: SiteMasterComponent, data: { breadcrumb: 'Manage User' } },
  { path: 'contract', component: ContractComponent, data: { breadcrumb: 'Manage User' } },
  { path: 'materials', component: MaterialComponent, data: { breadcrumb: 'Manage User' } },
  { path: 'category', component: CatMasterComponent, data: { breadcrumb: 'Manage User' } },
  { path: 'lead-sources', component: LeadSourceComponent, data: { breadcrumb: 'Manage User' } },
  { path: 'consumable', component: ConsumableComponent, data: { breadcrumb: 'Manage User' } }
];

@NgModule({
  declarations: [ActionTypesComponent, ActionsComponent, AssetCategoriesComponent, ExpenseCodeComponent, JobCodesComponent, ProjectTypesComponent, ActionTypeDialogueComponent, JobCodesDialogueComponent, ExpenseCodeDialogueComponent, AssetCategoriesDialogueComponent, AddIndustryComponent, ProjectTypesDialogueComponent, ActionsDialogueComponent, IndustryComponent, CountryComponent, StateComponent, CityComponent, AddCountryComponent, AddStateComponent, AddCityComponent, ItemMasterComponent, SiteMasterComponent, CatMasterComponent, LeadSourceComponent, AddLeadComponent, AddItemComponent, AddCatComponent, AddSiteComponent, ContractComponent, AddContractComponent, AddSiteComponent, AddContractComponent, MaterialComponent, AddMaterialComponent, ConsumableComponent, AddConsumableComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [ActionTypeDialogueComponent, JobCodesDialogueComponent, ExpenseCodeDialogueComponent, AssetCategoriesDialogueComponent, ProjectTypesDialogueComponent, ActionsDialogueComponent, AddIndustryComponent,  AddCountryComponent, AddStateComponent, AddCityComponent, AddLeadComponent, AddItemComponent, AddCatComponent, AddSiteComponent, AddContractComponent,AddMaterialComponent,AddConsumableComponent]
})
export class MasterdataNewModule { }
