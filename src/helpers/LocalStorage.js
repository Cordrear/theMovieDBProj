class LocalStorage {
	get(key) {
		let item = window.localStorage.getItem(key);
		if (item !== null) {
			return JSON.parse(item);
		} else {
			console.log('null!!!!!!');
			window.localStorage.setItem(key, []);
		}
	}
	set(key, value) {
		window.localStorage.setItem(key, JSON.stringify(value));
	}
	delete (key) {
		window.localStorage.removeItem(key);
	}
	isEmpty(key) {
		return window.localStorage.getItem(key) ? false : true;
	}
	addToArray (key, subValue) {
		let value = this.get(key);
		if (value != null) {
			value.push(subValue);
			this.set(key, value);
		} else {
			this.set(key, subValue);
		}
	}
	removeFromArray (key, subValue) {
		let value = this.get(key);
		if (value != null) {
			const index = value.indexOf(subValue);
			if (index != -1) {
				value.splice(index, 1);
				this.set(key, value);
			}
		}
	}
	toggleInArray(key, subValue) {
		console.log('1');
		let value = this.get(key);
		if (value != null) {
			console.log('2');
			const index = value.indexOf(subValue);
			if (index != -1) {
				console.log('3');
				value.splice(index, 1);
				this.set(key, value);
			} else {
				console.log('4');
				value.push(subValue);
				this.set(key, value);
			}
		} else {
			console.log('5');
			this.set(key, [subValue]);
		}
		console.log('6');
	}
}

const MyLocalStorage = new LocalStorage();
export default MyLocalStorage;