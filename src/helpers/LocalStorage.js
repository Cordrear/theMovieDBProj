const LocalStorage = {
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
}