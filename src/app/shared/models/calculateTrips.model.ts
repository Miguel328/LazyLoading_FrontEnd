import { Bag } from "./bag";

export class CalculateTrips {
    public Day?: number;
    public Trips?: number;
    public Bags?: Bag[];
    public Case?: string;

    constructor(model?: CalculateTrips) {
        this.Day   = model.Day;
        this.Trips = model.Trips;
        this.Bags  = model.Bags;
        this.Case = "Case # " + this.Day + ": " + this.Trips;
    }
}