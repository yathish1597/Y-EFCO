import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar, Sort } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppSettings } from 'src/app/app.settings';

@Component({
  selector: 'app-grid-unscheduled',
  templateUrl: './grid-unscheduled.component.html',
  styleUrls: ['./grid-unscheduled.component.scss']
})
export class GridUnscheduledComponent implements OnInit {

  actionSchedulingList = [];
  currentDate: Date = new Date();
  isActionsSubmitted = false;
  hasError = false;
  filterData = {};
  isSaving = false;
  getActionScheduledToUser = { UserId: 0, ScheduledDate: '', TaskId: 0, UserName: '' };
  // permissions: Permissions;
  saveActionSchedulingList = [];
  taskId: number;
  subscription: Subscription;
  highlightedUnscheduledActionId: number;
  isPM: boolean;
  isSuperAdmin: boolean;
  constructor(
    // public _schService: SchedulingService,
    private _activatedRoute: ActivatedRoute,
    // private _globalMethods: GlobalMethods,
    private dialog: MatDialog,
    public _snackBar: MatSnackBar,
    private _datePipe: DatePipe,
    private appSettings: AppSettings
    ) {
    // this.permissions = this._globalMethods.checkPermissions('Action scheduling', 'Scheduling');
    this._activatedRoute.queryParams.subscribe(
      actionData => {
        this.highlightedUnscheduledActionId = null;
        // this.highlightedUnscheduledActionId = parseInt(atob(actionData['actionId']));
      }
    )
    // let sessionDetails = JSON.parse(localStorage.getItem('userloginsession'));
    // let roles = sessionDetails['Roles']
    // let btSuperAdmin = sessionDetails['UserDetails']['bt_superadmin'];
    // let btSuperAdmin = sessionDetails['UserDetails']['bt_user_last_loggedin_mode'];
    // if (btSuperAdmin == true || roles.filter(x => x == 'Super Admin').length > 0) {
      this.isSuperAdmin = true;
    // }
    // if (roles.filter(x => x == 'Project Manager').length > 0 ) {
      this.isPM = true;
    // }
    // else {
    //   this.isPM = false;
    // }
  }

  ngOnInit() {
    // this.taskId = parseInt(atob(this._activatedRoute.parent.parent.params['value']['taskId']));
    // this.filterData = this.appSettings.filterData$.value;
    // this.subscription = this.appSettings.filterData$.pipe(skip(1)).subscribe(
    //   data => {
    //     if (data != null) {
    //       this.filterData = data;
          this.getActionSechdulingList({});
    //     }
    //   }
    // )
    this.setActionSchedulingDetails();
  }

  // editAction(manageActionId, logHourId) {
  //   var details = null;
  //   this._schService.getManageActionDetails(manageActionId, logHourId).subscribe(data => {
  //     details = data['Data'];
  //     this.dialog.open(EditActonDetailsComponent, {
  //       data: { details: details, fromDashboard: false, fromScheduled: false, fromUnscheduled: true },
  //       height: "auto",
  //       width: "1000px",
  //       autoFocus: false,
  //       disableClose: true
  //     }).afterClosed().subscribe(data => {
  //       if (data)
  //         this.getActionSechdulingList(this.filterData);
  //     });
  //   });
  // }

  // openActionDialog(item) {
  //   this._schService.getScheduledActionActivityLog(item.ManageActionId).subscribe(data => {
  //     this.dialog.open(ActionDialogComponent, {
  //       data: {
  //         ScheduledActionDetails: item, log: data['Data']
  //         // manageActionId: item.ManageActionId, quoteId: item.QuoteId, siteId: item.SiteId,
  //         // sowId: item.SowId, refNo: refNo, siteName: siteName, sowName: sowName,
  //         // actionId: actionId, actionName: actionName, taskId: this.taskId,
  //         // taskName: taskName
  //       },
  //       height: 'auto',
  //       width: '1050px',
  //       disableClose: true
  //     });
  //   })
  // }


  scheduleUnassignedAction(manageActionId: number, remaininghours, scheduledActionsCount: number) {
    // if (this.permissions.read == false) {
    //   return;
    // }
    // this._schService.getScheduledActionDetails(null, manageActionId).subscribe(data => {
    //   let log = [];
    //   this._schService.getScheduledActionActivityLog(manageActionId).subscribe(logData => {
    //     log = logData['Data'];
    //     this.dialog.open(ScheduleActionDialogComponent, {
    //       data: {
    //         manageActionId: manageActionId,
    //         remainingHours: remaininghours > 0 ? remaininghours : null,
    //         ScheduledActionData: data['Data'],
    //         ScheduledActionsCount: scheduledActionsCount,
    //         log: log,
    //         permissions: this.permissions,
    //         isDisabled: false
    //       },
    //       height: 'auto',
    //       autoFocus: false,
    //       width: '1050px',
    //       disableClose: true
    //     }).afterClosed().subscribe(data => {
    //       if (data == true) {
    //         this.getActionSechdulingList(this.filterData);
    //       }
    //     })
    //   })
    // })
  }

  openActionLogModal(manageActionId, refNo, siteName, sowName, actionName, taskName, jobCode, jobCodeTitle) {
    let log = [];
    // this._schService.getScheduledActionActivityLog(manageActionId).subscribe(data => {
    //   log = data['Data'];
    //   this.dialog.open(ActionActivityLogComponent, {
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

  scheduleActions() {
    this.isActionsSubmitted = true;
    this.hasError = false;
    this.saveActionSchedulingList = [];
    this.actionSchedulingList.forEach(act => {
      let isActionValid = true;
      let isActionEmpty = true;
      act.TotalAssignedHours = 0;
      act['Permission'] = true;
      act['IsPMScheduler'] = this.isPM;
      act.DetailsList.forEach(det => {
        if ((det.AssignedHours !== null && det.AssignedHours !== '')
          && (det.ScheduleDate === null || det.ScheduleDate === '' || det.AssignedUser === null || det.AssignedUser === '')) {
          this.hasError = true;
          det.HasError = true;
          isActionValid = false;
          isActionEmpty = false;
        } else if (det.ScheduleDate === null || det.ScheduleDate === ''
          || det.AssignedHours === null || det.AssignedHours === ''
          || det.AssignedUser === null || det.AssignedUser === '') {
          isActionValid = false;
          isActionEmpty = true;
        } else {
          det.ScheduleDate = this._datePipe.transform(det.ScheduleDate, 'yyyy-MM-dd');
          isActionEmpty = false;
          act.TotalAssignedHours = Number(act.TotalAssignedHours) + Number(det.AssignedHours);
        }
      });
      if (isActionValid && !isActionEmpty) {
        this.saveActionSchedulingList.push(act);
      }
      this.isActionsSubmitted = true;
    });
    if (this.hasError) {
      this.isActionsSubmitted = true;
      this._snackBar.open('Please enter data in all required fields', '', {
        duration: 2000,
        panelClass: 'redSnackBar'
      });
    }
    // console.log(this.saveActionSchedulingList);
    if (this.hasError === false && this.saveActionSchedulingList.length > 0) {
      this.saveActionSchedulingList.forEach(act => {
        let correctHours = 0;
        if (act.TotalScheduledHours > 0) {
          correctHours = act.TotalScheduledHours;
        }
        else {
          correctHours = act.PlannedHours;
        }
        correctHours = Number(correctHours.toFixed(2));
        if (act.TotalAssignedHours.toFixed(2) !== correctHours.toFixed(2)) {
          this.hasError = true;
          this._snackBar.open('Please ensure that sum of assigned hours must be equal to planned hours (' + correctHours + ') but should be not zero', '', {
            duration: 2000,
            panelClass: 'redSnackBar'
          });
        }
      });
      if (this.hasError === false) {
        this.isSaving = true;
        // this._schService.saveScheduledActionDetails(this.saveActionSchedulingList).subscribe(data => {
        //   this.isSaving = false;
        //   this.getActionSechdulingList(this.filterData);
        //   this.isActionsSubmitted = true;
        // },
        //   error => {
        //     console.log(error);
        //   }
        // );
      }
    }
  }

  resetData() {
    this.getActionSechdulingList(this.filterData);
  }

  sortData(sort: Sort) {
    const data = this.actionSchedulingList.slice();
    if (!sort.active || sort.direction === '') {
      this.actionSchedulingList = data;
      return;
    }

    this.actionSchedulingList = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'CreatedDate': return this.compare(a.CreatedDate, b.CreatedDate, isAsc);
        case 'QuoteNo': return this.compare(a.QuoteNo, b.QuoteNo, isAsc);
        case 'ProjectManagerName': return this.compare(a.ProjectManagerName, b.ProjectManagerName, isAsc);
        case 'Address': return this.compare(a.Address, b.Address, isAsc);
        case 'SiteName': return this.compare(a.SiteName, b.SiteName, isAsc);
        case 'SowName': return this.compare(a.SowName, b.SowName, isAsc);
        case 'ActionName': return this.compare(a.ActionName, b.ActionName, isAsc);
        case 'JobCode': return this.compare(a.JobCode, b.JobCode, isAsc);
        case 'PlannedHours': return this.compare(a.PlannedHours, b.PlannedHours, isAsc);
        case 'DueDate': return this.compare(a.DueDate, b.DueDate, isAsc);
        default: return 0;
      }
    });
  }

  public compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }



  // deleteManageAction(manageActionId) {
  //   this.dialog.open(AlertDailogComponent, {
  //     data: {
  //       title: 'Confirmation', description: 'Are you sure? Do you want to proceed?',
  //       confirmbuttnText: 'Yes', cancelButtonText: 'No', confirmButtonIcon: 'send', cancelButtonIcon: 'cancel'
  //     },
  //     height: 'auto',
  //     width: '600px'
  //   }).afterClosed().subscribe(oppurtunity => {
  //     if (oppurtunity == 'yes') {
  //       this._schService.deleteManageAction(manageActionId).subscribe(data => {
  //         this.getActionSechdulingList(this.filterData);
  //       });
  //     }
  //   });
  // }

  assignedHoursChanged(event: any, j, i) {
    this.actionSchedulingList[j].DetailsList[i].AssignedHours = event.target.value;
    let assHours = 0;
    this.actionSchedulingList[j].DetailsList.forEach(obj => {
      if (obj.AssignedHours !== null && obj.AssignedHours !== '') {
        assHours = Number(assHours) + Number(obj.AssignedHours);
      }
    });
    this.actionSchedulingList[j].TotalAssignedHours = assHours;
  }

  onlyDecimal(event) {
    let txt = event.target.value
    var charCode;
    charCode = event.charCode;
    // return ((k > 47 && k < 58));
    if (charCode == 46) {
      //Check if the text already contains the . character
      if (txt && txt.indexOf('.') === -1) {
        return true;
      } else {
        return false;
      }
    } else {
      if (charCode > 31 &&
        (charCode < 48 || charCode > 57))
        return false;
    }
    return true;
  }

  assignedUserChanged(event: any, j, i) {
    this.actionSchedulingList[j].DetailsList[i].AssignedUser = event.value;
    var date = this._datePipe.transform(this.actionSchedulingList[j].DetailsList[i].ScheduleDate, 'yyyy-MM-dd');
    var userId = event.value;
    if (this.actionSchedulingList[j].UnScheduled == true)
      this.actionSchedulingList[j].DetailsList[i].AssignedHours = this.actionSchedulingList[j].TotalScheduledHours;
    else
      this.actionSchedulingList[j].DetailsList[i].AssignedHours = this.actionSchedulingList[j].PlannedHours;

    this.actionSchedulingList[j].TotalAssignedHours = this.actionSchedulingList[j].DetailsList[i].AssignedHours;
    this.getActionsByUserSchDate(userId, date, this.actionSchedulingList[j].DetailsList[i].AssignUserList, j);
  }

  getActionsByUserSchDate(userId, date, list, mainIndex) {
    this.getActionScheduledToUser.TaskId = null; // this.selectedTaskId;
    this.getActionScheduledToUser.UserId = userId;
    this.getActionScheduledToUser.ScheduledDate = this._datePipe.transform(date, 'yyyy-MM-dd');
    this.getActionScheduledToUser.UserName = list.filter(x => x.UserId == userId)[0].UserName;
    let currentObj = {
      ActionDetailId: this.actionSchedulingList[mainIndex].DetailsList[0].DetailId,
      ManageActionId: this.actionSchedulingList[mainIndex].ManageActionId,
      ActionDueDateOption: this.actionSchedulingList[mainIndex].DueDateOption,
      AssignedHours: this.actionSchedulingList[mainIndex].DetailsList[0].AssignedHours,
      DueDate: this.actionSchedulingList[mainIndex].DueDate ? this._datePipe.transform(this.actionSchedulingList[mainIndex].DueDate, "yyyy-MM-dd") : 'Pending',
      // PendingTimesheetExists: this.actionSchedulingList[mainIndex].DetailsList[0].TimesheetExists,
      ProjectManager: this.actionSchedulingList[mainIndex].ProjectManagerName,
      QuoteNo: this.actionSchedulingList[mainIndex].QuoteNo,
      RemainingHours: this.actionSchedulingList[mainIndex].DetailsList[0].RemainingHours,
      ScheduledDate: this.actionSchedulingList[mainIndex].DetailsList[0].ScheduleDate,
      Sequence: null,
      SiteName: this.actionSchedulingList[mainIndex].SiteName,
      SowName: this.actionSchedulingList[mainIndex].SowName,
      TaskId: this.actionSchedulingList[mainIndex].TaskId,
      TaskName: this.actionSchedulingList[mainIndex].TaskName,
      TeamMemberId: this.actionSchedulingList[mainIndex].TeamMemberId,
      TimeSheetStatus: this.actionSchedulingList[mainIndex].DetailsList[0].ActionCompletionStatus,
      TimesheetApproved: this.actionSchedulingList[mainIndex].DetailsList[0].Approved,
      TimesheetId: this.actionSchedulingList[mainIndex].DetailsList[0].LogHoursId,
      // TimesheetParentExists: this.actionSchedulingList[mainIndex].DetailsList[0].TimesheetExists,
      ToDate: null,
      UserId: userId,
      UserName: this.getActionScheduledToUser.UserName,
      WorkedHours: this.actionSchedulingList[mainIndex].WorkedHours,
      PlannedHours: this.actionSchedulingList[mainIndex].PlannedHours
    }
    // this._schService.getActionsByUserSchDate(this.getActionScheduledToUser).subscribe(data => {
    //   let details = data['Data'];
    //   this.dialog.open(ActionsByUserSchdateComponent, {
    //     data: {
    //       date: this.getActionScheduledToUser.ScheduledDate, userId: userId,
    //       userName: this.getActionScheduledToUser.UserName,
    //       list: data['Data']['ActionsList'],
    //       details: details,
    //       IncludedAction: currentObj
    //       // IsSchedulable: true
    //     },
    //     autoFocus: false,
    //     disableClose: true,
    //     height: 'auto',
    //     width: '280px'
    //   }).afterClosed().subscribe(
    //     infoData => {
    //       if (infoData.status != true) {
    //         this.actionSchedulingList[mainIndex].DetailsList[0].ScheduleDate = infoData.date;
    //       }
    //       else if (infoData.status == true) {
    //         this.getActionSechdulingList(this.filterData);
    //       }
    //     }
    //   )
    // });
  }

  openDueDateDialog(item) {
    // const data = { Data: item, isDashboard: false, permissions: this.permissions };
    // let initialItem = _.cloneDeep(item);
    // const dialogRef = this.dialog.open(ActionDueDateDialogComponent, {
    //   data: data,
    //   height: 'auto',
    //   width: '800px',
    //   autoFocus: false,
    //   disableClose: true
    // });
    // dialogRef.afterClosed().subscribe(successData => {
    //   if (successData) {
    //     item.DueDate = successData['formValues']['dueDate'] != null ? this._datePipe.transform(new Date(successData['formValues']['dueDate']), 'y-MM-dd') : null;
    //     item.DueDateOptionId = successData['formValues']['dueDateOption'];
    //     item.IsRemedialAction = successData['formValues']['isRemedial'];
    //     item.TeamMemberId = successData['formValues']['teamMemberId'];
    //     item.IsPreferred = successData['formValues']['isPreferred'];
    //     item.FirstTeamMemberId = successData['formValues']['firstTeamMemberId'];
    //     item.SecondTeamMemberId = successData['formValues']['secondTeamMemberId'];
    //     item.ThirdTeamMemberId = successData['formValues']['thirdTeamMemberId'];
    //     item.Remarks = successData['formValues']['remarks'];
    //     item.DueDateOption = successData['option'];
    //     item.PreviousDueDateOptionId = initialItem['DueDateOptionId'];
    //     item.PreviousDueDate = this._datePipe.transform(initialItem['DueDate'], 'y-MM-dd');
    //     // this.dueDateData = item;
    //     this._schService.upsertDueDate(item).subscribe(data => {
    //       this.getActionSechdulingList(this.filterData);
    //     },
    //       error => {
    //         console.log(error);
    //       }
    //     );
    //   }
    // });
  }


  getActionSechdulingList(filterData) {
    this.isActionsSubmitted = false;
    this.hasError = false;
    this.highlightedUnscheduledActionId = null;
    // this.taskId = parseInt(atob(this._activatedRoute.parent.parent.params['value']['taskId']));
    // this._schService.getActionsSchedulingList({ TaskId: this.taskId, FilterForm: filterData }).subscribe(data => {
    //   this.isSaving = false;
    let data = {
      "ActionSchedulingList": [
        {
          "OldFirstTeamMemberId": null,
          "OldSecondTeamMemberId": null,
          "OldThirdTeamMemberId": null,
          "OldNotes": null,
          "OldJobCodeId": null,
          "WasManageActionDeleted": null,
          "ActionGoogleDriveId": null,
          "ManageActionId": 352,
          "TaskId": 14,
          "TaskName": "Calculations",
          "QuoteId": 230,
          "QuoteNo": "A-025006",
          "SiteId": 230,
          "SiteName": "001 438 Miller Ave",
          "SiteStreetAddress": null,
          "siteLatitude": null,
          "siteLongitude": null,
          "SiteCity": null,
          "SiteState": null,
          "SiteCountry": null,
          "SowId": 303,
          "SowName": "SRPR",
          "ActionId": null,
          "ActionName": "CAD Conversions",
          "JobCodeId": 77,
          "JobCode": "CCAD1",
          "JobCodeTitle": "Construction CAD 1",
          "JobCodeStatus": false,
          "PlannedHours": 2,
          "CreatedDate": "2021-02-25T03:44:14.213",
          "CreatedOn": "0001-01-01T00:00:00",
          "DueDate": "2021-02-26T05:00:00",
          "DueDateOptionId": 37,
          "DueDateOption": "Fixed Date - Action must be completed ON this specific date",
          "DetailsList": [
            {
              "ModifiedBy": null,
              "IsDuplicate": false,
              "AssignedHours": null,
              "AssignedUser": null,
              "ScheduleDate": "2021-06-08",
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
              "AssignedOn": null,
              "AssignedTo": null,
              "AssignedBy": null,
              "DetailId": null,
              "LogHoursId": null,
              "ActionCompletionStatus": null,
              "Approved": null,
              "Status": null,
              "AssignedUserStatus": null,
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
          "ProjectManagerId": 53,
          "ProjectManagerName": "Andrew Jones",
          "TotalAssignedHours": 0,
          "TotalScheduledHours": 2,
          "UnScheduled": null,
          "Rescheduled": null,
          "ProjectType": "project",
          "IsProject": true,
          "Notes": "NA",
          "IsDueToday": true,
          "Address": "438 Miller Ave",
          "City": "Oshawa",
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
          "OldPlannedHours": 2,
          "PreviousDueDateOptionId": null,
          "PreviousDueDate": null,
          "Remarks": null,
          "Permission": false,
          "IsPMScheduler": null,
          "EncryptedQuoteId": "MjMw",
          "EncryptedQuoteNum": "QS0wMjUwMDY=",
          "EncryptedProjectType": "cHJvamVjdA==",
          "EncryptedSiteId": "MjMw",
          "EncryptedSowId": "MzAz"
        },
        {
          "OldFirstTeamMemberId": null,
          "OldSecondTeamMemberId": null,
          "OldThirdTeamMemberId": null,
          "OldNotes": null,
          "OldJobCodeId": null,
          "WasManageActionDeleted": null,
          "ActionGoogleDriveId": null,
          "ManageActionId": 332,
          "TaskId": 14,
          "TaskName": "Calculations",
          "QuoteId": 234,
          "QuoteNo": "A-025010",
          "SiteId": 234,
          "SiteName": "001 Complex Avenue",
          "SiteStreetAddress": null,
          "siteLatitude": null,
          "siteLongitude": null,
          "SiteCity": null,
          "SiteState": null,
          "SiteCountry": null,
          "SowId": 308,
          "SowName": "SRPR",
          "ActionId": null,
          "ActionName": "CAD Conversions",
          "JobCodeId": 77,
          "JobCode": "CCAD1",
          "JobCodeTitle": "Construction CAD 1",
          "JobCodeStatus": false,
          "PlannedHours": 4,
          "CreatedDate": "2021-02-25T02:47:19.577",
          "CreatedOn": "0001-01-01T00:00:00",
          "DueDate": "2021-02-16T05:00:00",
          "DueDateOptionId": 37,
          "DueDateOption": "Fixed Date - Action must be completed ON this specific date",
          "DetailsList": [
            {
              "ModifiedBy": null,
              "IsDuplicate": false,
              "AssignedHours": null,
              "AssignedUser": null,
              "ScheduleDate": "2021-06-08",
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
              "AssignedOn": null,
              "AssignedTo": null,
              "AssignedBy": null,
              "DetailId": null,
              "LogHoursId": null,
              "ActionCompletionStatus": null,
              "Approved": null,
              "Status": null,
              "AssignedUserStatus": null,
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
          "ProjectManagerId": 67,
          "ProjectManagerName": "Bob Cormier",
          "TotalAssignedHours": 0,
          "TotalScheduledHours": 4,
          "UnScheduled": null,
          "Rescheduled": null,
          "ProjectType": "project",
          "IsProject": true,
          "Notes": "NA",
          "IsDueToday": true,
          "Address": "10/1 Complex Avenue",
          "City": "Jersey City",
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
          "OldPlannedHours": 4,
          "PreviousDueDateOptionId": null,
          "PreviousDueDate": null,
          "Remarks": null,
          "Permission": false,
          "IsPMScheduler": null,
          "EncryptedQuoteId": "MjM0",
          "EncryptedQuoteNum": "QS0wMjUwMTA=",
          "EncryptedProjectType": "cHJvamVjdA==",
          "EncryptedSiteId": "MjM0",
          "EncryptedSowId": "MzA4"
        }
      ],
      "UnscheduledTotal": 6,
      "ScheduledTotal": 6
    }
      this.actionSchedulingList = data['ActionSchedulingList'];
    //   this.appSettings.FetchTotal.next({ scheduledTotal: data['Data']['ScheduledTotal'], unScheduledTotal: data['Data']['UnscheduledTotal'] });
    // },
    //   error => {
    //     console.log(error);
    //   });
  }

  setActionSchedulingDetails() {
    this.isActionsSubmitted = false;
    this.hasError = false;
    this._activatedRoute.data.subscribe(data => {
      this.isSaving = false;
      // this.actionSchedulingList = data['resolverData']['Data']['ActionSchedulingList'];
      // this.appSettings.FetchTotal.next({ scheduledTotal: data['resolverData']['Data']['ScheduledTotal'], unScheduledTotal: data['resolverData']['Data']['UnscheduledTotal'] });
    },
      error => {
        console.log(error);
      });
  }

  schDateChanged(event: any, j, i) {
    // this.currentDate = event;
    this.actionSchedulingList[j].DetailsList[i].ScheduleDate = event;
    if (this.actionSchedulingList[j].DetailsList[i].AssignedUser != null) {
      this.getActionsByUserSchDate(this.actionSchedulingList[j].DetailsList[i].AssignedUser, event, this.actionSchedulingList[j].DetailsList[i].AssignUserList, j);
    }
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
    // this.appSettings.GridViewURL.next('unscheduled');
  }

}
