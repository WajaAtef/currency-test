import { CurrencyAttributes } from './data-currencies.model';

export class Currency {

    id: string;
    attributes: CurrencyAttributes;

    constructor(json: any) {
        this.id = json.id;
        this.attributes = new CurrencyAttributes(json.attributes);
    }
}
