import {Pipe, PipeTransform} from '@angular/core';
import {IAddress} from '../interfaces';

@Pipe({
  name: 'userAddress'
})
export class UserAddressPipe implements PipeTransform {

  /**
   * Converts a given IAddress into a readable string.
   */
  transform(value: IAddress): string {

    if (value) {
      return this.convertAddressToReadableFormat(value);
    }

    return;
  }

  private convertAddressToReadableFormat(address: IAddress): string {
    return `${address.street} ${address.suite}, ${address.city} ${address.zipcode}`;
  }

}
