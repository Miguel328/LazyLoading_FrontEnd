import { Element } from './element';
export class Bag {
    public TotalElements?: number;
    public Elements?: Element[];

    constructor(model?: Bag) {
        this.TotalElements   = model.TotalElements;
        this.Elements        = model.Elements;
    }
}