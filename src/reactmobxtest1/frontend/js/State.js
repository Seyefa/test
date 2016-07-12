import { observable } from 'mobx';

class State {
    constructor() {
        this.someObj = observable({ someInt: 0 });

        fetch('http://localhost:57897/tests')
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    console.error(`fetch error: ${response.status} ${response.statusText}`);
                    throw response;
                }
            }).then((json) => {
                this.someObj.someInt = json.startValue;
            })
    }

    inc() {
        this.someObj.someInt++;
    }

    dec() {
        if (this.someObj.someInt > 0) {
            this.someObj.someInt--;
        }
    }
}

export default State;