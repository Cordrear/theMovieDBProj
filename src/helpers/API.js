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

/*
//all genres
https://api.themoviedb.org/3/genre/movie/list?api_key=d376b1449bc67048fe304e600c11fb06&language=ru

//getByID
https://api.themoviedb.org/3/movie/123?api_key=d376b1449bc67048fe304e600c11fb06&language=ru //123 - id

//getRecomendations
https://api.themoviedb.org/3/movie/123/recommendations?api_key=d376b1449bc67048fe304e600c11fb06&language=ru&page=1

//search
https://api.themoviedb.org/3/search/movie?api_key=d376b1449bc67048fe304e600c11fb06&language=ru&query=prestige&page=1&include_adult=false
*/
