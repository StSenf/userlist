import {IPhoto} from "../interfaces";

export class PhotoVm implements IPhoto {
  public albumId: number;
  public id: number;
  public title: string;
  public url: string;
  public thumbnailUrl: string;
}
