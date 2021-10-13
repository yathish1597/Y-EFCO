import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxEditorModule } from 'ngx-editor';
import {
  InputTextModule, GalleriaModule, MenubarModule, CheckboxModule, DialogModule, MessagesModule, GrowlModule,
  PanelModule, CalendarModule, RadioButtonModule, InputSwitchModule, SelectButtonModule, DataTableModule, DataListModule,
  SplitButtonModule, ButtonModule, DropdownModule, AccordionModule, ProgressBarModule, ConfirmDialogModule,
  TooltipModule, TreeModule, DragDropModule
} from 'primeng/primeng';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule
} from '@angular/material';
import { jqxKanbanComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxkanban';
import { DeleteConfirmDialogComponent } from './delete-confirm-dialog/delete-confirm-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HelpDialogComponent } from './help-dialog/help-dialog.component';
import { ShowDocsComponent } from './show-docs/show-docs.component';
import { AgmCoreModule } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { DragulaModule } from 'ng2-dragula';
import { ModalModule } from 'ngx-bootstrap';
import { DndModule } from 'ngx-drag-drop';
import { TableModule } from 'primeng/table';
import { ChartModule } from 'angular-highcharts';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatAutocompleteModule,
    NgxEditorModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    DragDropModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    TreeModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule, GalleriaModule, MenubarModule, CheckboxModule, DialogModule, MessagesModule, GrowlModule,
    PanelModule, CalendarModule, RadioButtonModule, InputSwitchModule, SelectButtonModule, DataTableModule, DataListModule,
    SplitButtonModule, ButtonModule, DropdownModule, AccordionModule, ProgressBarModule, ConfirmDialogModule,
    TooltipModule,
    DragulaModule, ConfirmationPopoverModule, TableModule,NgxChartsModule,ChartModule,
    OwlDateTimeModule, OwlNativeDateTimeModule,ModalModule,DndModule, 
    DragDropModule,AgmCoreModule, AgmJsMarkerClustererModule, MglTimelineModule
  ],
  exports: [
    FlexLayoutModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    NgxEditorModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    DragDropModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    TreeModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule, InputTextModule, GalleriaModule, MenubarModule, CheckboxModule, DialogModule, MessagesModule, GrowlModule,
    PanelModule, CalendarModule, RadioButtonModule, InputSwitchModule, SelectButtonModule, DataTableModule, DataListModule,
    SplitButtonModule, ButtonModule, DropdownModule, AccordionModule, ProgressBarModule, ConfirmDialogModule,
    TooltipModule, jqxKanbanComponent,FormsModule,
    ReactiveFormsModule,
    DragulaModule, ConfirmationPopoverModule, TableModule,NgxChartsModule,ChartModule,
    OwlDateTimeModule, OwlNativeDateTimeModule,ModalModule,DndModule, 
    DragDropModule,AgmCoreModule, AgmJsMarkerClustererModule, MglTimelineModule
  ],
  declarations: [jqxKanbanComponent, DeleteConfirmDialogComponent, HelpDialogComponent, ShowDocsComponent]
})
export class SharedModule { }
