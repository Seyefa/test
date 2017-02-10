import { observable } from 'mobx';

class Test {
    @observable someVal: number;

    constructor() {
        this.someVal = 0;
    }
}

export default Test;