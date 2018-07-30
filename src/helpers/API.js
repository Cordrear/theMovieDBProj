const API = {
	movies: {
		getPopular: (page = 1) => {
			return request('/movie/popular?page=' + page + '&');
		},
		getById: (id) => {
			return request('/movie/' + id + '?');
		},
		getRecomendations: (id) => {
			return request('/movie/' + id + '/recommendations?');
		},
		getPosterPath: (path) => {
			return (path) ? IMG_URL + path : 'https://store-images.s-microsoft.com/image/apps.10304.13510798886495884.b867e440-0644-43e9-8e4c-a70db68026b9.890841e5-da82-4036-a22b-faa80150d29e?mode=crop&q=90&h=300&w=200&format=jpg';
		},
	},
	getGenres: () => {
		return request('/genre/movie/list?');
	},
	search: (query, page = 1) => {
		return request('/search/movie?query=' + query + '&page=' + page + '&');
	},
};

const URL = 'https://api.themoviedb.org/3';
const API_KEY = 'd376b1449bc67048fe304e600c11fb06';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const request = (req) => {
	return new Promise((resolve, reject) => {
		var data = '{}';
		var xhr = new XMLHttpRequest();
		xhr.addEventListener('readystatechange', function() {
			if (this.readyState === this.DONE) {
				resolve(JSON.parse(this.responseText));
			}
		});
		xhr.open('GET', URL + req + 'language=ru&api_key=' + API_KEY, true);
		xhr.send(data);
	});
};

export default API;
