import {Country} from './country.model';

export class Region{
    constructor(
        public Id: number,
        public name: string,
        public country: Country
    ){}
}