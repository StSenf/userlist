import {Component, OnInit} from '@angular/core';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';

import {UserService} from '../shared/user.service';
import {IAddress, IDisplayedUser, IUser} from '../shared/interfaces';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public displayedColumns: string[] = ["id", "name", "address"];
  public dataSource: IDisplayedUser[] = [];

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this._userService.getUsers().subscribe(
      (response: HttpResponse<IUser[]>) => {
      const userList = response.body;

      this.dataSource = userList.map((user: IUser) => {
        return {
          id: user.id,
          name: user.name,
          address: this.convertAddressToReadableFormat(user.address),
        };
      });
    },
      (error: HttpResponse<HttpErrorResponse>) => {
        console.log(error);
      });
  }

  private convertAddressToReadableFormat(address: IAddress): string {
    return `${address.street}  ${address.suite}, ${address.city} ${address.zipcode}`;
  }

}
