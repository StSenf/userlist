import {IAddress, ICompany, IUser} from "../interfaces";

export class UserVm implements IUser {
  public id: number;
  public name: string;
  public username: string;
  public email: string;
  public address: IAddress;
  public phone: string;
  public website: string;
  public company: ICompany;

  constructor(attributes = {}) {
    Object.assign(this, attributes);
  }

  public get userAddress(): string {
    return this.address && this.convertAddressToReadableFormat(this.address);
  }

  private convertAddressToReadableFormat(address: IAddress): string {
    return `${address.street} ${address.suite}, ${address.zipcode} ${address.city}`;
  }
}
