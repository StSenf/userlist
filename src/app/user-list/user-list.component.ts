import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {Router} from '@angular/router';

import {UserService} from '../shared/user.service';
import {IAddress, IDisplayedUser, IUser} from '../shared/interfaces';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {

  public displayedColumns: string[] = ["id", "name", "address"];
  public dataSource: IDisplayedUser[] = [];
  public subscription: Subscription;

  constructor(private _userService: UserService,
              private _router: Router) { }

  public ngOnInit() {
    this.subscription = this._userService.getUsers().subscribe(
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
      }
    );
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public navigateTo(id: number): void {
    this._router.navigate(["user/" + id]);
  }

  private convertAddressToReadableFormat(address: IAddress): string {
    return `${address.street}  ${address.suite}, ${address.city} ${address.zipcode}`;
  }

}
