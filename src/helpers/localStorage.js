class LocalStorage {
	get(key) {
		const item = window.localStorage.getItem(key);
		if (item != null) {
			return JSON.parse(item);
		} else {
			return null;
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
		let value = this.get(key);
		if (value != null) {
			const index = value.indexOf(subValue);
			if (index != -1) {
				value.splice(index, 1);
				this.set(key, value);
			} else {
				value.push(subValue);
				this.set(key, value);
			}
		} else {
			this.set(key, [subValue]);
		}
	}
	isInArray(key, subValue) {
		let arr = this.get(key);
		const index = arr.indexOf(subValue);
		if (index != -1) {
			return true;
		} else {
			return false;
		}
	}
}

const MyLocalStorage = new LocalStorage();
export default MyLocalStorage;