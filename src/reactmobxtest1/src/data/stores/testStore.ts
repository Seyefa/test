import { observable } from 'mobx';
import { Arende } from '../test';
import { Fetch } from '../../services/fetch';

export interface Handelse {
    handelseId: number;
    rubrik: string;
    startDatum: string;
}

export class TestStore {
    @observable arende: Arende;
    @observable handelser: Handelse[];

    constructor() {
        this.arende = new Arende;
        this.handelser = [];
    }

    async get() {
        this.handelser = await Fetch.getJson<Handelse[]>('http://localhost/rxminutweb/wwwroot/sokigo/api/beslut?dnr=L%202017-000001');
    }

    inc = () => {
        this.arende.id++;
    }
    dec = () => {
        this.arende.id--;
    }
}
