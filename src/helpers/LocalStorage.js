class LocalStorage {
	get(key) {
		return window.localStorage.getItem(key);
	}
	set(key, value) {
		window.localStorage.setItem(key, value);
	}
	isEmpty(key) {
		return window.localStorage.getItem(key) ? false : true;
	}
	toggle(key, value) {
		if (!this.isEmpty(key)) {
			//
		}
	}
}

/*const LocalStorage = {
	parse: (key) => {
		if (LocalStorage.getItem(key) != null)
		 return LocalStorage.getItem(key).split(',');
		else return null;
	},
	toggle: (key, value) => {
		let LS = LocalStorage.parse(key);
		if (LS != null) {
			const index = LS.indexOF(value);
			if (index == -1) {
				LS.push(value);
			} else {
				LS.splice(index, 1);
			}
		} else {
			LS = [value];
		}
		localStorage.setItem(key, LS.join(','));
	}
}*/