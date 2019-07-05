import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../shared/user.service';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {IAddress, IUser} from '../shared/interfaces';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit, OnDestroy {

  public selectedUser: IUser = {};
  public selectedUserAddress = "";
  public subscription: Subscription;

  constructor(private _activatedRoute: ActivatedRoute,
              private _userService: UserService) { }

  public ngOnInit() {
    this.getSelectedUser();
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private getSelectedUser(): void {
    const id = +this._activatedRoute.snapshot.paramMap.get('id');

    this.subscription = this._userService.getSingleUser(id).subscribe(
      (response: HttpResponse<IUser>) => {
        this.selectedUser = response.body;
        this.selectedUserAddress = this.convertAddressToReadableFormat(this.selectedUser.address);
      },
      (error: HttpResponse<HttpErrorResponse>) => {
        console.log(error);
      });
  }

  private convertAddressToReadableFormat(address: IAddress): string {
    return `${address.street}  ${address.suite}, ${address.city} ${address.zipcode}`;
  }

}
