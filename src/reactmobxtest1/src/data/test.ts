import { observable } from 'mobx';

export class Arende {
    id = 0;
    @observable dnr: string;
    @observable handelser: Handelse[];

    constructor() {
        this.handelser = [];
    }
}

export class Handelse {
    id = 0;
    @observable handelseTyp: string;
}
