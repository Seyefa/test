import { observable } from 'mobx';

class State {
	@observable someObj = { someInt: 0 };

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