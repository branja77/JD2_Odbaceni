import { AccommodationType } from './accommodation-type.model';

export class Accommodation {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public address: string,
    public averageGrade: number,
    public latitude: number,
    public longitude: number,
    public imageUrl: string,
    public approved: boolean,
    public accommodationType: AccommodationType,
    public place : Place,
    public owner: BAIdentityUser) {
  }
}