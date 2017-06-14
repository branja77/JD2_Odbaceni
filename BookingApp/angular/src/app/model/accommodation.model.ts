import { AccommodationType } from './accommodation-type.model';
import { BAIdentityUser } from './baidentity-user.model';
import { Place } from './place.model';

export class Accommodation {
  constructor(
    public Id: number,
    public Name: string,
    public Description: string,
    public Address: string,
    public AverageGrade: number,
    public Latitude: number,
    public Longitude: number,
    public ImageUrl: string,
    public Approved: boolean,
    public AccommodationType: AccommodationType,
    public Place : Place,
    public Owner: BAIdentityUser) {
  }
}