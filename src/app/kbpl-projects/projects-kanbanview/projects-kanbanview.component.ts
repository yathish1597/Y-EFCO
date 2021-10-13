import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';
import { DatepickerOptions } from 'ng2-datepicker';
import { frLocale } from 'ngx-bootstrap';
import { jqxKanbanComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxkanban';

@Component({
  selector: 'app-projects-kanbanview',
  templateUrl: './projects-kanbanview.component.html',
  styleUrls: ['./projects-kanbanview.component.scss']
})
export class ProjectsKanbanviewComponent implements OnInit {

  draggedItem: any;
  
  localData: any[] = [
    { id:"kanban_table_1",collapsed:false, style:{'background-color':'rgb(189, 215, 238)'}, stage:'Awarded', header: 'Awarded (2)', data : [{ id: 'kanban_item_1161', name: '5-35151', info: 'Updates: 5', colorCode: 'Green', percentage: 'Completion: 70%',campaign: '',projectName:"Adani kawai", actions: 'Schedule: 4 / 12',budget: 'Budget: $ 542/700',tasks:'Schedule: 2 / 5',duedate:'Due Date: 17-08-20',startDate:'Start Date: 20-02-20',updateddate:'last updated : 1 day ago', hex: '#FFFFFF',clientName:"Dhawal",stage:"Stage: Architecture",cost:"Cost:12.8 cr/15.9 cr",colorcode1:"rgb(122 ,173, 22)",colorcode2:"rgb(165, 42, 42)"}, 
  
    { id:'kanban_item_1163', collapsed:false,name: 'Reference Plan',  info: 'Updates: 2', colorCode: 'Green', campaign: 'Delpark Homes | Dave',projectName:"Talwandi Saboo ", actions: 'Schedule: 8/10',budget: 'Budget: $ 560/800',tasks:'Schedule: 57/100',duedate:'Due Date: 26-05-20',startDate:'Start Date: 20-02-20',percentage: 'Completion: 94%', hex: '#FFFFFF',clientName:"Siva",stage:"Stage: Plumbing",cost:"Cost:13.09 cr/20.09 cr",updateddate:'last updated: 3 days ago',colorcode2:"rgb(122 ,173, 22)",colorcode1:"rgb(165, 42, 42)"}]},
    { id:"kanban_table_2",collapsed:false, style:{'background-color':'rgb(189, 215, 238)'}, stage:'Blueprint', header: 'Plan Of Work (1)', data : [{ id: 'kanban_item_1162', name: 'Topographic',  info: 'Updates: 7', colorCode: 'Red',percentage: 'Completion: 85%', campaign: 'Hydro One | Dave',projectName:"Balco", actions: 'Schedule: 6/10',budget: 'Budget: $ 542/700',tasks:'Schedule: 59/100',duedate:'Due Date: 19-03-20',startDate:'Start Date: 20-02-20', hex: '#FFFFFF',clientName:"Navin" ,stage:"Stage: Structure",cost:"Cost:13.09 cr/20.09 cr",updateddate:'last updated : 10 days ago',colorcode1:"rgb(122 ,173, 22)",colorcode2:"rgb(165, 42, 42)"}]},
    { id:"kanban_table_3", collapsed:false,style:{'background-color':'rgb(189, 215, 238)'}, stage:'Initiated', header: 'Initiated (1)', data : [{ id: 'kanban_item_1166', name: 'TRPR', info: 'Updates: 6', colorCode: 'Green',percentage: 'Completion: 75%', campaign: 'Sandbank | Dwayne',projectName:"NTECL Vallur", actions: 'Schedule: 9/10',budget: 'Budget: $ 652/750',tasks:'Schedule: 78/100',duedate:'Due Date: 20-04-21',startDate:'Start Date: 20-02-20', hex: '#FFFFFF',clientName:"Tharun",stage:"Stage: Electrical",cost:"Cost:12 cr/14.09 cr",updateddate:'last updated : 1 day ago',colorcode2:"rgb(122 ,173, 22)",colorcode1:"rgb(165, 42, 42)"}]},
    { id:"kanban_table_4", collapsed:false,style:{'background-color':'rgb(189, 215, 238)'}, stage:'Progress', header: 'Work In Progress (1)', data : [{ id: 'kanban_item_1164', name: 'Survey',  info: 'Updates: 2', colorCode: 'Green',percentage: 'Completion: 88%', campaign: 'Valleymede | Dave',projectName:"VTPS " , actions: 'Schedule: 7/10',budget: 'Budget: $ 425/650',tasks:'Schedule: 85/100',duedate:'Due Date: 18-11-21',startDate:'Start Date: 20-02-20', hex: '#FFFFFF',clientName:"Kalyan",stage:"Stage: Fire Fighting",cost:"Cost:10 cr/11 cr",updateddate:'last updated : 1 month ago',colorcode1:"rgb(122 ,173, 22)",colorcode2:"rgb(165, 42, 42)"}]},
    { id:"kanban_table_5",collapsed:false, style:{'background-color':'rgb(189, 215, 238)'}, stage:'Near Completion', header: 'Near Completion (1)', data : [{ id: 'kanban_item_1166', name: 'SRPR', info: 'Updates: 3', colorCode: 'Green',percentage: 'Completion: 80%', campaign: 'AECOM | Dwayne',projectName:"HINDALCO", actions: 'Schedule: 9/10',budget: 'Budget: $ 752/900',tasks:'Schedule: 66/100',duedate:'Due Date: 27-09-19',startDate:'Start Date: 20-02-20', hex: '#FFFFFF',clientName:"Dheeraj",stage:"Stage: Plumbing",cost:"Cost:09 cr/20 cr",updateddate:'last updated : 2 month ago',colorcode2:"rgb(122 ,173, 22)",colorcode1:"rgb(165, 42, 42)"}]},
    { id:"kanban_table_6", collapsed:false,style:{'background-color':'rgb(189, 215, 238)'}, stage:'Completed', header: 'Completed (0)', data : []},
    { id:"kanban_table_7",collapsed:false, style:{'background-color':'rgb(189, 215, 238)'}, stage:'Cancelled', header: 'Cancelled (0)', data : []},
    { id:"kanban_table_8",collapsed:false, style:{'background-color':'rgb(189, 215, 238)'}, stage:'On Hold', header: 'On Hold (0)', data : []},
    ];
  constructor() { }

  ngOnInit() {

  }

dragStart(event, item, sourceKanbanId) {
  this.draggedItem = item;
  this.draggedItem.kanbanId = sourceKanbanId;
}

drag(item) {
  document.getElementById(item.id).style.display = "none";
}

drop(event) {
  if (this.draggedItem && this.draggedItem.kanbanId && event.event.path[3]['id']) {
      this.moveItem(this.draggedItem, event.event.path[3]['id']);
      this.draggedItem = null;
  }
}

dragEnd(event, item) {
  document.getElementById(item.id).style.display = "table-row";
  this.draggedItem = null;
}

  moveItem(draggedItem, kanbanId) {
  for (let i = 0; i < this.localData.length; i++) {
    if (kanbanId === this.localData[i].id) {
      if (i % 2 === 0) {
        draggedItem.hex = "#FFFFFF";
      } else {
        draggedItem.hex = "#E0E0E0";
      }
      this.localData[i].data.push(draggedItem);
      this.localData[i].header = "";
      this.localData[i].header =
        this.localData[i].stage + " (" + this.localData[i].data.length + ")";
    }
    if (draggedItem.kanbanId === this.localData[i].id) {
      var temp = this.localData[i].data;
      for (let j = 0; j < temp.length; j++) {
        if (temp[j].id === draggedItem.id) {
          this.localData[i].data.splice(j, 1);
          this.localData[i].header = "";
          this.localData[i].header =
            this.localData[i].stage + " (" + this.localData[i].data.length + ")";
        }
      }
    }
  }
   }

   

   

   changeProgress( value,i) {


    if (!value || value == 0) {
      this.localData[i]['focus'] = 25;
    } else if (value == 25) {
      this.localData[i]['focus'] = 50;
    } else if (value == 50) {
      this.localData[i]['focus'] = 75;
    } else if (value == 75) {
      this.localData[i]['focus'] = 100;
    } else {
      this.localData[i]['focus'] = 0;
    }
  }

changestatus(index){
  this.localData[index].collapsed=!this.localData[index].collapsed;
}
  scrollKanban(side) {
    var ele = document.getElementById('kanban-table-container');
    if (side == 'left')
        ele.scrollLeft += 210;
    else
        ele.scrollLeft -= 210;
   }
}

