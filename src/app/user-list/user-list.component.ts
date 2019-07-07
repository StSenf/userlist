import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";

import {UserVm} from "../shared/models/user-vm";
import {UserService} from "../shared/services/user.service";

@Component({
  selector: "app-user-list",
  styleUrls: ["./user-list.component.scss"],
  templateUrl: "./user-list.component.html",
})
export class UserListComponent implements OnInit {

  public displayedColumns: string[] = ["id", "name", "address"];
  public dataSource: UserVm[];

  constructor(private _userService: UserService,
              private _activatedRoute: ActivatedRoute,
              private _router: Router) { }

  public ngOnInit() {
    this.dataSource = this._activatedRoute.snapshot.data.userList;
  }

  public navigateTo(id: number): void {
    this._router.navigate(["user/" + id]);
  }

}
