const API_KEY = 'd376b1449bc67048fe304e600c11fb06';
const URL = 'https://api.themoviedb.org/3';
const IMG_URL = 'https://image.tmdb.org/t/p/w200';

const API = {
	movies: {
		getPopular: (page = 1) => {
			return request('/movie/popular?page=' + page + '&');
		},
		getById: (id) => {
			return request('/movie/' + id + '?');
		},
		getRecommendations: (id) => {
			return request('/movie/' + id + '/recommendations?');
		},
		getPosterPath: (path) => {
			return (path) ? IMG_URL + path : null;
		},
	},
	getGenres: () => {
		return request('/genre/movie/list?');
	},
	search: (query, page = 1) => {
		return request('/search/movie?query=' + query + '&page=' + page + '&');
	},
};

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
