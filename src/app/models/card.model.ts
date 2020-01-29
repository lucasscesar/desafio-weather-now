export class Card {

    temperature: number;
    humidity: number;
    pressure: number;
    lastUpdated: Date;

    constructor(
        public name: string
    ) { }
}
