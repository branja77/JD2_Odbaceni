import {Region} from './region.model';

export class Place{
    constructor(
        public Id: number,
        public name: string,
        public region: Region
    ){}
}