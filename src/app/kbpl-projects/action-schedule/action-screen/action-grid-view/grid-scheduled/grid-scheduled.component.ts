import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog, Sort } from '@angular/material';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-grid-scheduled',
  templateUrl: './grid-scheduled.component.html',
  styleUrls: ['./grid-scheduled.component.scss']
})
export class GridScheduledComponent implements OnInit {

  taskId: number;
  filterData = {};
  allActionListPM = [];
  // permissions: Permissions;
  getActionScheduledToUser = { UserId: 0, ScheduledDate: '', TaskId: 0, UserName: '' };
  actionListPM = [];
  scheduledActionDetails: any;
  public currentPage = 0
  public pageSize = parseInt(localStorage.getItem('settings') ? localStorage.getItem('settings') : '5');
  public totalSize = 0;
  // subscription: Subscription;
  constructor(
    // private appSettings: AppSettings,
    // public _schService: SchedulingService,
    // private _analyticsService:AnalyticsService,
    private dialog: MatDialog,
    // private _globalMethods: GlobalMethods,
    private _datePipe: DatePipe,
    private _activatedRoute: ActivatedRoute) {
      // this.permissions = this._globalMethods.checkPermissions('Action scheduling', 'Scheduling');
     }

  ngOnInit() {
    // this.taskId = parseInt(atob(this._activatedRoute.parent.parent.params['value']['taskId']));
    // this.filterData = this.appSettings.filterData$.value;
    // this.subscription = this.appSettings.filterData$.pipe(skip(1)).subscribe(
    //   data => {
    //       this.filterData = data;
          this.getActionSechdulingList();
    //   }
    // )
    this.setActionSchedulingDetails();
    // this.appSettings.FetchTotal.next(null);
  }


  setActionSchedulingDetails() {
    this._activatedRoute.data.subscribe(data => {
      // this.taskId = parseInt(atob(this._activatedRoute.parent.parent.params['value']['taskId']));
      // this.allActionListPM = data['resolverData']['Data'];
      // if (isInitialCall) {
      //   let allQuotes = this.allContActionListPM.map(x => ({ QuoteNo: x.QuoteNo, QuoteId: x.QuoteId }));
      //   const uniqueQuotes = Array.from(new Set(allQuotes.map(a => a.QuoteId)))
      //     .map(id => {
      //       return allQuotes.find(a => a.QuoteId === id)
      //     })
      //   this.allQuotes = uniqueQuotes;
      //   // this.allQuotes = _.sortBy(this.allQuotes, 'QuoteNo');

      //   // let JobcodesIds = this.allContActionListPM.map(x => ({ JobCodeId: x.JobCodeId }));
      //   // const uniqueJobCodeIds = Array.from(new Set(JobcodesIds.map(a => a)))
      //   //     .map(id => {
      //   //       return JobcodesIds.find(a => a === id)
      //   //     })
      //   // let allJobcodes = this.allContActionListPM.map(x => ({ JobCode: x.JobCode, JobCodeTitle:x.JobCodeTitle, JobCodeId: x.JobCodeId }));
      //   // const uniqueJobCode = Array.from(new Set(allJobcodes.map(a => a.JobCodeId)))
      //   //     .map(id => {
      //   //       return allJobcodes.find(a => a.JobCodeId === id)
      //   //     })
      //   // this.allJobCodes = uniqueJobCode;
      //   // this.allJobCodes = _.sortBy(this.allJobCodes, 'JobCode');
      //   let allStaff = [];
      //   for (let i = 0; i < this.allContActionListPM.length; i++) {
      //     // allStaff.concat(this.allContActionListPM[i].DetailsList)
      //     allStaff.push.apply(allStaff, this.allContActionListPM[i].DetailsList.filter(x => x.AssignedTo != '-' && x.AssignedTo != null));
      //   }

      //   const uniqueStaff = Array.from(new Set(allStaff.map(a => a.AssignedUser)))
      //     .map(id => {
      //       return allStaff.find(a => a.AssignedUser === id)
      //     })
      //   this.allStaff = uniqueStaff;
      // }
      this.currentPage = 0;
      this.actionListPM = this.allActionListPM.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
      this.totalSize = this.allActionListPM.length;

    },
      error => {
        console.log(error);
      });
  }

  getActionSechdulingList() {
    // this._schService.getActionsSchedulingListScheduled(this.filterData, this.taskId).subscribe(data => {
      this.actionListPM = [
        {
          "OldFirstTeamMemberId": null,
          "OldSecondTeamMemberId": null,
          "OldThirdTeamMemberId": null,
          "OldNotes": null,
          "OldJobCodeId": null,
          "WasManageActionDeleted": null,
          "ActionGoogleDriveId": null,
          "ManageActionId": 306,
          "TaskId": 14,
          "TaskName": "Calculations",
          "QuoteId": 232,
          "QuoteNo": "A-025008",
          "SiteId": 232,
          "SiteName": "274 Clyde St.",
          "SiteStreetAddress": "167 William Fair Drive",
          "siteLatitude": null,
          "siteLongitude": null,
          "SiteCity": "Darlington",
          "SiteState": null,
          "SiteCountry": null,
          "SowId": 305,
          "SowName": "Final As-Built Survey",
          "ActionId": 18,
          "ActionName": "Research Request",
          "JobCodeId": 89,
          "JobCode": "PA1",
          "JobCodeTitle": "Jr. Project Administrator",
          "JobCodeStatus": true,
          "PlannedHours": 2,
          "CreatedDate": "2021-02-05T02:43:39.857",
          "CreatedOn": "2021-02-05T00:00:00",
          "DueDate": "2021-02-04T05:00:00",
          "DueDateOptionId": 37,
          "DueDateOption": "Fixed Date - Action must be completed ON this specific date",
          "DetailsList": [
            {
              "ModifiedBy": null,
              "IsDuplicate": false,
              "AssignedHours": 2,
              "AssignedUser": 46,
              "ScheduleDate": null,
              "AssignUserList": [
                {
                  "UserId": 67,
                  "UserName": "Bob Cormier",
                  "userAssignedHours": null,
                  "Status": true
                },
                {
                  "UserId": 71,
                  "UserName": "Cris Leduc",
                  "userAssignedHours": null,
                  "Status": true
                },
                {
                  "UserId": 62,
                  "UserName": "Emilio William",
                  "userAssignedHours": null,
                  "Status": true
                },
                {
                  "UserId": 46,
                  "UserName": "Joseph Blackmore",
                  "userAssignedHours": null,
                  "Status": true
                },
                {
                  "UserId": 3,
                  "UserName": "Kenneth McKee",
                  "userAssignedHours": null,
                  "Status": true
                },
                {
                  "UserId": 79,
                  "UserName": "Option Matrix",
                  "userAssignedHours": null,
                  "Status": true
                },
                {
                  "UserId": 78,
                  "UserName": "Sachin Patil",
                  "userAssignedHours": null,
                  "Status": true
                }
              ],
              "AssignedOn": "2021-02-23",
              "AssignedTo": "Joseph Blackmore",
              "AssignedBy": "Super Admin",
              "DetailId": 200,
              "LogHoursId": null,
              "ActionCompletionStatus": null,
              "Approved": null,
              "Status": "Scheduled",
              "AssignedUserStatus": true,
              "TimesheetSubmittedDate": null,
              "CompletedDate": null,
              "ActualHours": null,
              "ActualCost": null,
              "WorkedHours": null,
              "RemainingHours": null,
              "TimesheetExists": false
            }
          ],
          "IsRemedialAction": false,
          "TeamMemberId": null,
          "ProjectManagerId": 59,
          "ProjectManagerName": "James Smith",
          "TotalAssignedHours": 0,
          "TotalScheduledHours": 0,
          "UnScheduled": false,
          "Rescheduled": null,
          "ProjectType": "project",
          "IsProject": true,
          "Notes": "na",
          "IsDueToday": true,
          "Address": null,
          "City": null,
          "LogHourId": null,
          "IsApproved": null,
          "IsDelete": false,
          "ShouldUpdateManage": false,
          "IsPreferred": false,
          "FirstTeamMemberId": null,
          "SecondTeamMemberId": null,
          "ThirdTeamMemberId": null,
          "ScheduledActionsCount": 0,
          "JobCodeRate": null,
          "ActualHours": null,
          "ActualCost": null,
          "WorkedHours": null,
          "RemainingHours": null,
          "OldPlannedHours": null,
          "PreviousDueDateOptionId": null,
          "PreviousDueDate": null,
          "Remarks": null,
          "Permission": false,
          "IsPMScheduler": true,
          "EncryptedQuoteId": "MjMy",
          "EncryptedQuoteNum": "QS0wMjUwMDg=",
          "EncryptedProjectType": "cHJvamVjdA==",
          "EncryptedSiteId": "MjMy",
          "EncryptedSowId": "MzA1"
        },
        {
          "OldFirstTeamMemberId": null,
          "OldSecondTeamMemberId": null,
          "OldThirdTeamMemberId": null,
          "OldNotes": null,
          "OldJobCodeId": null,
          "WasManageActionDeleted": null,
          "ActionGoogleDriveId": null,
          "ManageActionId": 349,
          "TaskId": 14,
          "TaskName": "Calculations",
          "QuoteId": 231,
          "QuoteNo": "A-025007",
          "SiteId": 231,
          "SiteName": "Uptown Cyberabad Building",
          "SiteStreetAddress": "Uptown Cyberabad Building ",
          "siteLatitude": null,
          "siteLongitude": null,
          "SiteCity": "Hyderabad",
          "SiteState": null,
          "SiteCountry": null,
          "SowId": 304,
          "SowName": "Topography",
          "ActionId": null,
          "ActionName": "CAD Conversions",
          "JobCodeId": 77,
          "JobCode": "CCAD1",
          "JobCodeTitle": "Construction CAD 1",
          "JobCodeStatus": false,
          "PlannedHours": 2,
          "CreatedDate": "2021-02-25T03:19:35.16",
          "CreatedOn": "2021-02-25T00:00:00",
          "DueDate": "2021-02-17T05:00:00",
          "DueDateOptionId": 37,
          "DueDateOption": "Fixed Date - Action must be completed ON this specific date",
          "DetailsList": [
            {
              "ModifiedBy": null,
              "IsDuplicate": false,
              "AssignedHours": 2,
              "AssignedUser": 3,
              "ScheduleDate": null,
              "AssignUserList": [
                {
                  "UserId": 67,
                  "UserName": "Bob Cormier",
                  "userAssignedHours": null,
                  "Status": true
                },
                {
                  "UserId": 71,
                  "UserName": "Cris Leduc",
                  "userAssignedHours": null,
                  "Status": true
                },
                {
                  "UserId": 3,
                  "UserName": "Kenneth McKee",
                  "userAssignedHours": null,
                  "Status": true
                }
              ],
              "AssignedOn": "2021-02-26",
              "AssignedTo": "Kenneth McKee",
              "AssignedBy": "Super Admin",
              "DetailId": 207,
              "LogHoursId": null,
              "ActionCompletionStatus": null,
              "Approved": null,
              "Status": "Scheduled",
              "AssignedUserStatus": true,
              "TimesheetSubmittedDate": null,
              "CompletedDate": null,
              "ActualHours": null,
              "ActualCost": null,
              "WorkedHours": null,
              "RemainingHours": null,
              "TimesheetExists": false
            }
          ],
          "IsRemedialAction": false,
          "TeamMemberId": null,
          "ProjectManagerId": 59,
          "ProjectManagerName": "James Smith",
          "TotalAssignedHours": 0,
          "TotalScheduledHours": 0,
          "UnScheduled": false,
          "Rescheduled": null,
          "ProjectType": "project",
          "IsProject": true,
          "Notes": "NA",
          "IsDueToday": true,
          "Address": null,
          "City": null,
          "LogHourId": null,
          "IsApproved": null,
          "IsDelete": false,
          "ShouldUpdateManage": false,
          "IsPreferred": false,
          "FirstTeamMemberId": null,
          "SecondTeamMemberId": null,
          "ThirdTeamMemberId": null,
          "ScheduledActionsCount": 0,
          "JobCodeRate": null,
          "ActualHours": null,
          "ActualCost": null,
          "WorkedHours": null,
          "RemainingHours": null,
          "OldPlannedHours": null,
          "PreviousDueDateOptionId": null,
          "PreviousDueDate": null,
          "Remarks": null,
          "Permission": false,
          "IsPMScheduler": true,
          "EncryptedQuoteId": "MjMx",
          "EncryptedQuoteNum": "QS0wMjUwMDc=",
          "EncryptedProjectType": "cHJvamVjdA==",
          "EncryptedSiteId": "MjMx",
          "EncryptedSowId": "MzA0"
        },
        {
          "OldFirstTeamMemberId": null,
          "OldSecondTeamMemberId": null,
          "OldThirdTeamMemberId": null,
          "OldNotes": null,
          "OldJobCodeId": null,
          "WasManageActionDeleted": null,
          "ActionGoogleDriveId": null,
          "ManageActionId": 309,
          "TaskId": 14,
          "TaskName": "Calculations",
          "QuoteId": 232,
          "QuoteNo": "A-025008",
          "SiteId": 232,
          "SiteName": "274 Clyde St.",
          "SiteStreetAddress": "167 William Fair Drive",
          "siteLatitude": null,
          "siteLongitude": null,
          "SiteCity": "Darlington",
          "SiteState": null,
          "SiteCountry": null,
          "SowId": 305,
          "SowName": "Final As-Built Survey",
          "ActionId": 16,
          "ActionName": "Quote Review",
          "JobCodeId": 89,
          "JobCode": "PA1",
          "JobCodeTitle": "Jr. Project Administrator",
          "JobCodeStatus": true,
          "PlannedHours": 2,
          "CreatedDate": "2021-02-05T02:45:14.163",
          "CreatedOn": "2021-02-05T00:00:00",
          "DueDate": "2021-02-24T00:00:00",
          "DueDateOptionId": 38,
          "DueDateOption": "Flex Date - Action must be completed on OR before this specific date",
          "DetailsList": [
            {
              "ModifiedBy": null,
              "IsDuplicate": false,
              "AssignedHours": 2,
              "AssignedUser": 71,
              "ScheduleDate": null,
              "AssignUserList": [
                {
                  "UserId": 67,
                  "UserName": "Bob Cormier",
                  "userAssignedHours": null,
                  "Status": true
                },
                {
                  "UserId": 71,
                  "UserName": "Cris Leduc",
                  "userAssignedHours": null,
                  "Status": true
                },
                {
                  "UserId": 62,
                  "UserName": "Emilio William",
                  "userAssignedHours": null,
                  "Status": true
                },
                {
                  "UserId": 46,
                  "UserName": "Joseph Blackmore",
                  "userAssignedHours": null,
                  "Status": true
                },
                {
                  "UserId": 3,
                  "UserName": "Kenneth McKee",
                  "userAssignedHours": null,
                  "Status": true
                },
                {
                  "UserId": 79,
                  "UserName": "Option Matrix",
                  "userAssignedHours": null,
                  "Status": true
                },
                {
                  "UserId": 78,
                  "UserName": "Sachin Patil",
                  "userAssignedHours": null,
                  "Status": true
                }
              ],
              "AssignedOn": "2021-02-26",
              "AssignedTo": "Cris Leduc",
              "AssignedBy": "Super Admin",
              "DetailId": 201,
              "LogHoursId": null,
              "ActionCompletionStatus": null,
              "Approved": null,
              "Status": "Scheduled",
              "AssignedUserStatus": true,
              "TimesheetSubmittedDate": null,
              "CompletedDate": null,
              "ActualHours": null,
              "ActualCost": null,
              "WorkedHours": null,
              "RemainingHours": null,
              "TimesheetExists": false
            }
          ],
          "IsRemedialAction": false,
          "TeamMemberId": null,
          "ProjectManagerId": 59,
          "ProjectManagerName": "James Smith",
          "TotalAssignedHours": 0,
          "TotalScheduledHours": 0,
          "UnScheduled": false,
          "Rescheduled": null,
          "ProjectType": "project",
          "IsProject": true,
          "Notes": "na",
          "IsDueToday": true,
          "Address": null,
          "City": null,
          "LogHourId": null,
          "IsApproved": null,
          "IsDelete": false,
          "ShouldUpdateManage": false,
          "IsPreferred": false,
          "FirstTeamMemberId": null,
          "SecondTeamMemberId": null,
          "ThirdTeamMemberId": null,
          "ScheduledActionsCount": 0,
          "JobCodeRate": null,
          "ActualHours": null,
          "ActualCost": null,
          "WorkedHours": null,
          "RemainingHours": null,
          "OldPlannedHours": null,
          "PreviousDueDateOptionId": null,
          "PreviousDueDate": null,
          "Remarks": null,
          "Permission": false,
          "IsPMScheduler": true,
          "EncryptedQuoteId": "MjMy",
          "EncryptedQuoteNum": "QS0wMjUwMDg=",
          "EncryptedProjectType": "cHJvamVjdA==",
          "EncryptedSiteId": "MjMy",
          "EncryptedSowId": "MzA1"
        }
      ];
    //   this.currentPage = 0;
    //   this.actionListPM = this.allActionListPM.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
    //   this.totalSize = this.allActionListPM.length;
    // },
    //   error => {
    //     console.log(error);
    //   });
    // this.getTotalOfScheduledUnscheduled();
  }
  
  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.actionListPM = this.allActionListPM.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
  }

   openActionLogModal(manageActionId, refNo, siteName, sowName, actionName, taskName, jobCode, jobCodeTitle) {
    let log = [];
    // this._schService.getScheduledActionActivityLog(manageActionId).subscribe(data => {
    //   log = data['Data'];
    //   const dialogRef = this.dialog.open(ActionActivityLogComponent, {
    //     data: {
    //       refNo: refNo, siteName: siteName, sowName: sowName, actionName: actionName,
    //       taskName: taskName, jobCode: jobCode, jobCodeTitle: jobCodeTitle, log: log
    //     },
    //     height: 'auto',
    //     width: '900',
    //   });
    // },
    //   error => {
    //     console.log(error);
    //   }
    // );
  }
  
  sortData(sort: Sort) {
    const data = this.actionListPM.slice();
    if (!sort.active || sort.direction === '') {
      this.actionListPM = data;
      return;
    }
    this.actionListPM = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case '1': return this.compare(a.CreatedDate, b.CreatedDate, isAsc);
        case '2': return this.compare(a.QuoteNo, b.QuoteNo, isAsc);
        case '3': return this.compare(a.ProjectManagerName, b.ProjectManagerName, isAsc);
        case '4': return this.compare(a.SiteName, b.SiteName, isAsc);
        case '5': return this.compare(a.SowName, b.SowName, isAsc);
        case '6': return this.compare(a.SiteStreetAddress, b.SiteStreetAddress, isAsc);
        case '7': return this.compare(a.TaskName, b.TaskName, isAsc);
        case '8': return this.compare(a.ActionName, b.ActionName, isAsc);
        case '9': return this.compare(a.JobCode, b.JobCode, isAsc);
        case '10': return this.compare(a.PlannedHours, b.PlannedHours, isAsc);
        case '11': return this.compare(a.DueDate, b.DueDate, isAsc);
        case '12': return this.compare((a.DetailsList[0].AssignedOn == null) ? '-' : a.DetailsList[0].AssignedOn, b.DetailsList[0].AssignedOn == null ? '-' : b.DetailsList[0].AssignedOn, isAsc);
        case '13': return this.compare((a.DetailsList[0].AssignedHours == null || a.DetailsList[0].AssignedHours == '') ? '-' : a.DetailsList[0].AssignedHours, (b.DetailsList[0].AssignedHours == null || b.DetailsList[0].AssignedHours == '') ? '-' : b.DetailsList[0].AssignedHours, isAsc);
        case '14': return this.compare((a.DetailsList[0].AssignedTo == null || a.DetailsList[0].AssignedTo == '') ? '-' : a.DetailsList[0].AssignedTo, (b.DetailsList[0].AssignedTo == null || b.DetailsList[0].AssignedTo == '') ? '-' : b.DetailsList[0].AssignedTo, isAsc);
        case '15': return this.compare(a.DetailsList[0].Status, b.DetailsList[0].Status, isAsc);
        default: return 0;
      }
    });
  }
  editAction(manageActionId, logHourId) {
    var details = null;
    // this._schService.getManageActionDetails(manageActionId, logHourId).subscribe(data => {
    //   details = data['Data'];
    //   this.dialog.open(EditActonDetailsComponent, {
    //     data: { details: details, fromDashboard: false, fromScheduled: false, fromUnscheduled: true },
    //     height: "auto",
    //     width: "1000px",
    //     autoFocus: false,
    //     disableClose: true
    //   }).afterClosed().subscribe(data => {
    //     if(data)
    //       this.getActionSechdulingList();
    //   });
    // });
  }

  public compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  // openActionDialog(item, refNo, siteName, sowName, actionId, actionName, taskName) {
  //   this.dialog.open(ActionDialogComponent, {
  //     data: {
  //       manageActionId: item.ManageActionId, quoteId: item.QuoteId, siteId: item.SiteId,
  //       sowId: item.SowId, refNo: refNo, siteName: siteName, sowName: sowName,
  //       actionId: actionId, actionName: actionName, taskId: this.taskId,
  //       taskName: taskName
  //     },
  //     height: 'auto',
  //     width: '1000px'
  //   });
  // }

  openActionDialog(item) {
    // this._schService.getScheduledActionActivityLog(item.ManageActionId).subscribe(data => {
    //   // this.dialog.open(ActionDialogComponent, {
    //   //   data: {
    //   //     ScheduledActionDetails: item, log: data['Data']
    //   //     // manageActionId: item.ManageActionId, quoteId: item.QuoteId, siteId: item.SiteId,
    //   //     // sowId: item.SowId, refNo: refNo, siteName: siteName, sowName: sowName,
    //   //     // actionId: actionId, actionName: actionName, taskId: this.taskId,
    //   //     // taskName: taskName
    //   //   },
    //   //   height: 'auto',
    //   //   width: '1050px',
    //   //   disableClose: true
    //   // });
    // })
  }


  public openAddPhoneNotesDialog(manageActionId, detailId, timesheetStatus,item) {
    // this._schService.getScheduledActionDetails(detailId, manageActionId).subscribe(data => {
    //   this.scheduledActionDetails = data['Data'];
    //   let log = [];
    //   this._schService.getScheduledActionActivityLog(manageActionId).subscribe(data => {
    //     log = data['Data'];
    //     // this.dialog.open(AddPhoneNotesComponent, {
    //     //   data: { Data: this.scheduledActionDetails, permissions: this.permissions, log: log, timesheetStatus: timesheetStatus,isDisabled:false },
    //     //   height: 'auto',
    //     //   width: '1050px',
    //     //   disableClose: true
    //     // }).afterClosed().subscribe(data => {
    //     //   if(data == 'close')
    //     //     return;
    //     //   else if (data.isDeassign) {
    //     //     this._schService.deAllocateScheduledAction({ ActionDetailId: detailId, Remarks: data.remarks,ManageActionId:manageActionId }).subscribe(data => {
    //     //       this.getActionSechdulingList();
    //     //       return;
    //     //     },
    //     //       error => {
    //     //         console.log(error);
    //     //       }
    //     //     );
    //     //   }
    //     //   this.getActionSechdulingList();

    //     //   //this.getActionSechdulingList(this.selectedTaskId);
    //     //   //this.getSechduledActionsSummary();
    //     // });
    //   }
    //   );
    // });
  }


  

  // openTimesheetAndExpenses(detailId) {
  //   this._analyticsService.getActionTimesheetExpenses(detailId).subscribe(
  //     timeData=>{
  //       this.dialog.open(ApproveTimesheetExpensesComponent, {
  //         data: { detailData: timeData },
  //         height: "auto",
  //         width: "1050px",
  //         disableClose: true
  //       }).afterClosed().subscribe(lead => {
  //         if(lead != true){
  //           this.getActionSechdulingList()
  //         }
  //       });
  //     })
  // }

  openDueDateDialog(item) {
    // const data = { Data: item, isDashboard: false, permissions: this.permissions };
    // let initialItem = _.cloneDeep(item);
    // const dialogRef = this.dialog.open(ActionDueDateDialogComponent, {
    //   data: data,
    //   height: 'auto',
    //   width: '800px',
    //   autoFocus: false,
    //   disableClose:true
    // });
    // dialogRef.afterClosed().subscribe(successData => {
    //   if (successData) {;
    //     item.DueDate = successData['formValues']['dueDate'] != null ? this._datePipe.transform(new Date(successData['formValues']['dueDate']), 'y-MM-dd') : null;
    //     item.DueDateOptionId = successData['formValues']['dueDateOption'];
    //     item.IsRemedialAction = successData['formValues']['isRemedial'];
    //     item.TeamMemberId = successData['formValues']['teamMemberId'];
    //     item.Remarks = successData['formValues']['remarks'];
    //     item.DueDateOption = successData['option'];
    //     item.PreviousDueDateOptionId = initialItem['DueDateOptionId'];
    //     item.PreviousDueDate = this._datePipe.transform(initialItem['DueDate'], 'y-MM-dd');
    //     this._schService.upsertDueDate(item).subscribe(data => {
    //       this.getActionSechdulingList();
    //     },
    //       error => {
    //         console.log(error);
    //       }
    //     );
    //   }
    // });
  }
  
  getActionsByUserSchDate(userId, date, list, mainIndex, subIndex) {
    this.getActionScheduledToUser.TaskId = null; 
    this.getActionScheduledToUser.UserId = userId;
    this.getActionScheduledToUser.ScheduledDate = this._datePipe.transform(date, 'yyyy-MM-dd');
    this.getActionScheduledToUser.UserName = list.filter(x => x.UserId == userId)[0].UserName;
    let currentObj = {
      ActionDetailId: this.actionListPM[mainIndex].DetailsList[subIndex].DetailId,
      ManageActionId:this.actionListPM[mainIndex].ManageActionId,
      ActionDueDateOption: this.actionListPM[mainIndex].DueDateOption,
      AssignedHours: this.actionListPM[mainIndex].DetailsList[subIndex].AssignedHours,
      DueDate: this.actionListPM[mainIndex].DueDate ? this._datePipe.transform(this.actionListPM[mainIndex].DueDate,"yyyy-MM-dd") : 'Pending',
      // PendingTimesheetExists: this.actionListPM[mainIndex].DetailsList[subIndex].TimesheetExists,
      ProjectManager: this.actionListPM[mainIndex].ProjectManagerName,
      QuoteNo: this.actionListPM[mainIndex].QuoteNo,
      RemainingHours: this.actionListPM[mainIndex].DetailsList[subIndex].RemainingHours,
      ScheduledDate: this.actionListPM[mainIndex].DetailsList[subIndex].ScheduleDate,
      Sequence: null,
      SiteName: this.actionListPM[mainIndex].SiteName,
      SowName: this.actionListPM[mainIndex].SowName,
      TaskId: this.actionListPM[mainIndex].TaskId,
      TaskName: this.actionListPM[mainIndex].TaskName,
      TeamMemberId: this.actionListPM[mainIndex].TeamMemberId,
      TimeSheetStatus: this.actionListPM[mainIndex].DetailsList[subIndex].ActionCompletionStatus,
      TimesheetApproved: this.actionListPM[mainIndex].DetailsList[subIndex].Approved,
      TimesheetId: this.actionListPM[mainIndex].DetailsList[subIndex].LogHoursId,
      // TimesheetParentExists: this.actionListPM[mainIndex].DetailsList[subIndex].TimesheetExists,
      ToDate: null,
      UserId: userId,
      UserName: this.getActionScheduledToUser.UserName,
      WorkedHours: this.actionListPM[mainIndex].WorkedHours,
      PlannedHours: this.actionListPM[mainIndex].PlannedHours
    }
  
    // this._schService.getActionsByUserSchDate(this.getActionScheduledToUser).subscribe(data => {
    //   // this.actionsByUserSchData = data['Data']['ActionsList'];
    //   let details = data['Data'];
    //   this.dialog.open(ActionsByUserSchdateComponent, {
    //     data: { date: this.getActionScheduledToUser.ScheduledDate,userId:userId, 
    //       userName: this.getActionScheduledToUser.UserName, 
    //       list: data['Data']['ActionsList'], 
    //       details: details,
    //       IncludedAction: currentObj },
    //     autoFocus:false,
    //     disableClose:true,
    //     height: 'auto',
    //     width: '280px'
    //   }).afterClosed().subscribe(
    //     infoData=>{
    //       if(infoData.status == true){
    //         this.getActionSechdulingList();
    //       }
    //     }
    //   )
    // });
  }

  ngOnDestroy(){
    // this.subscription.unsubscribe(); 
    // this.appSettings.GridViewURL.next('scheduled');
   }

}
