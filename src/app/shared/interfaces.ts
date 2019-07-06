export interface IUserList {
  users: IUser[];
}

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress;
  phone: string;
  website: string;
  company: ICompany;
}

export interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IGeoData;
}

interface IGeoData {
  lat: string;
  lng: string;
}

export interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface IAlbum {
  userId: number;
  id: number;
  title: string;
}

export interface IPhoto {
  albumId: 1;
  id: 1;
  title: string;
  url: string;
  thumbnailUrl: string;
}

/**
 * Is used to display the user in the user-list table
 */
export interface IDisplayedUser {
  id: number;
  name: string;
  address: string;
}
