import { HasFormatter } from "../interface/HasFormatter";

export class Invoice implements HasFormatter {
    constructor(
        readonly client: string,
        private details: string,
        public amount: number,
    ) { }

    format() {
        return `${this.client} owns $${this.amount} for ${this.details}`
    }
}