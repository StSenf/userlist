import {IAddress, ICompany, IUser} from '../interfaces';

export class UserVm implements IUser {
  public id: number;
  public name: string;
  public username: string;
  public email: string;
  public address: IAddress;
  public phone: string;
  public website: string;
  public company: ICompany;
}
