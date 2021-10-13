import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { AlertService } from "../../shared/services/alert.service";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.scss"],
  providers: [AlertService],
})
export class SettingsComponent implements OnInit {
  public popoverStatusTitle: string = "Confirm Save Change";
  public popoverStatusMessage: string =
    "Are you sure you want to save changes.?";
  public cancelClicked: boolean = false;

  constructor(
    private alertService: AlertService,
    private titleService: Title
  ) {}
  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  ngOnInit() {
    this.setTitle("EFCO | Admin | Settings");
  }

  tableList: Object[] = [
    // {
    //   intSettingsId: 1,
    //   name: "Prospect Follow-up Days",
    //   description: "Prospect Follow-up Days",
    //   old_value: "10",
    // },
    // {
    //   intSettingsId: 2,
    //   name: "Project Follow-up Days",
    //   description: "Opportunity Follow-up Days",
    //   old_value: "10",
    // },
    {
      intSettingsId: 3,
      name: "Grid Length",
      description: "Default Grid Length",
      old_value: "10",
    },
    {
      intSettingsId: 4,
      name: "Notification Email",
      description: "Default Admin Notification Email	",
      old_value: "sg@optionmatrix.com",
    },
    {
      intSettingsId: 5,
      name: "Time Zone",
      description: "Default Time Zone",
      old_value: "EDT",
    },
  ];

  saveSettings() {
    this.alertService.createAlert("Successfully Saved.", 1);
  }
}
