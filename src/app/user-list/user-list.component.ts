import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {UserVm} from '../shared/models/user-vm';
import {UserService} from '../shared/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
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
