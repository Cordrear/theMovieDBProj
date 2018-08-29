import React from 'react';
import './style.less';
import API from '../helpers/API';
import MyLocalStorage from '../helpers/localStorage';
import Pagination from '../components/Pagination';
import MovieList from '../components/MovieList';
import Header from '../components/Header';
import Underlay from '../components/Underlay';
import SingleMovie from '../components/SingleMovie';

class MovieDBApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: [], //текущие фильмы для отображение
			allGenres: [], //все жанры
			page: 1, //номер текущей страницы
			totalPages: 1, //всего страниц
			pageInputValue: 1, //значение input'a страницы
			searchInputValue: '', //значение input'a поиска
			mode: 'popular', //текущий режим отображение (popular / search / fav)
			lastSearch: '', //последний поиск (для пагинации)
			isLoading: true, //отображение лоадера
			underlay: false, //отображение "подкладки" при просмотре одного фильма
			singleMovie: {}, //фильм для подробного отображение
			recommendations: [] //рекомендации для просматриваемого фильма
		};
	}

	//загрузка популярных фильмов при старте
	async componentDidMount() {
		if(MyLocalStorage.isEmpty('fav')) {
			MyLocalStorage.set('fav', new Array());
		}
		this.getPopularMovies();
	}

	//получение популярных фильмов (20 фильмов на странице)
	async getPopularMovies(pageNumber = 1) {
		this.setState({isLoading: true});

		const dataMovies = await API.movies.getPopular(pageNumber);
		const movies = dataMovies.results;

		const dataAllGenres = await API.getGenres();
		const allGenres = dataAllGenres.genres;

		const page = dataMovies.page;
		const totalPages = dataMovies.total_pages;
		this.setState({
			movies,
			allGenres,
			page,
			totalPages,
			pageInputValue: pageNumber,
			isLoading: false
		});
	}

	//выполнить поиск фильмов по запросу query (20 фильмов на странице)
	async doMoviesSearch(query, pageNumber = 1) {
		this.setState({isLoading: true});

		const dataMovies = await API.search(query, pageNumber);
		const movies = dataMovies.results;

		const dataAllGenres = await API.getGenres();
		const allGenres = dataAllGenres.genres;

		const page = dataMovies.page;
		const totalPages = dataMovies.total_pages;
		this.setState({
			movies,
			allGenres,
			page,
			totalPages,
			pageInputValue: pageNumber,
			isLoading: false
		});
	}

	//выполнить переход на страницу с номеров goTo
	goToHandler = (step) => {
		let goTo = this.state.pageInputValue;
		switch (step) {
			case 'first':
				goTo = 1;
				break;
			case 'prev':
				--goTo;
				break;
			case 'next':
				++goTo;
				break;
			case 'last':
				goTo = this.state.totalPages;
				break;
			default:
				break;
		}
		if (goTo > this.state.totalPages) {
			goTo = this.state.totalPages;
		};
		if (goTo < 1) {
			goTo = 1;
		};
		switch (this.state.mode) {
			case 'popular':
				this.getPopularMovies(goTo);
				break;
			case 'search':
				this.doMoviesSearch(this.state.searchInputValue, goTo);
				break;
		}
		window.scrollTo(0, 0);
	};

	//обработчик нажатия на кнопку поиска
	searchHandler = () => {
		const query = this.state.searchInputValue;
		if (query){
			this.doMoviesSearch(query);
			if (this.state.lastSearch != query) {
				this.setState({
					lastSearch: query,
					pageInputValue: 1
				});
			}
			this.setState({
				mode: 'search'
			});
		} else {
			this.getPopularMovies();
			this.setState({
				mode: 'popular',
				pageInputValue: 1,
				lastSearch: ''
			});
		}
	};

	//отслеживание изменений в input'e пагинации
	onPageInputChange = (e) => {
		const value = e.target.value;
		if (value == parseInt(value) || value === '') {
			this.setState({
				pageInputValue: value
			});
		};
	};

	//отслеживание изменений в input'e поиска
	onSearchInputChange = (e) => {
		this.setState({
			searchInputValue: e.target.value
		});
	};

	//клик на лого переводит в "начальное" состояние (1я страница популярного)
	onLogoClick = () => {
		this.getPopularMovies();
		this.setState({
			mode: 'popular',
			pageInputValue: 1,
			lastSearch: ''
		});
	};

	//добавление/удаление фильма из избранного
	onFavClick = (id) => {
		MyLocalStorage.toggleInArray('fav', id);
		this.setState(this.state);
	};

	//получение подробной информации по фильму
	async getMovieById(id) {
		const movie = await API.movies.getById(id);
		return movie;
	};

	//отображение избранных фильмов
	showFavMovies = () => {
		const arr = MyLocalStorage.get('fav');
		if (arr == null || arr == '') {
			//alert('В избранном пусто');
			this.setState({
				movies: []
			});
		} else {
			this.setState({
				isLoading: true,
				mode: 'fav'
			});
			let favMovies = [];
			arr.forEach( async (item) => {
				const movie = await API.movies.getById(item);
				favMovies.push(movie);
				this.setState({
					isLoading: false,
					movies: favMovies
				});
			});
		};
	};

	//открытие подробной информации о фильме при клике на заголовок
	onTitleClick = async (id) => {
		const movie = await this.getMovieById(id);
		const recommendations = await this.getRecommendations(id);
		this.setState({
			underlay: true,
			singleMovie: movie,
			recommendations: recommendations
		});
	}

	//закрытие подробной информации о фильме при клике на "подложку"
	onUnderlayClick = () => {
		this.setState({
			underlay: false
		})
	}

	//получение рекомендуемых фильмов
	async getRecommendations(id) {
		const recommendations = await API.movies.getRecommendations(id);
		return recommendations.results.splice(0, 5);
	}

	//обработка клика по фильму из списка рекомендаций
	onRecommendationClick = (id) => {
		/*this.setState({
			underlay: false
		});*/
		this.onTitleClick(id);
	}

	render() {
		return (
			<div className='app'>
				<Header
					onSearchClick={this.searchHandler}
					onChange={this.onSearchInputChange}
					searchInputValue={this.state.searchInputValue}
					onLogoClick={this.onLogoClick}
					showFavMovies={this.showFavMovies}
				/>
				<MovieList
					movies={this.state.movies}
					allGenres={this.state.allGenres}
					isLoading={this.state.isLoading}
					onFavClick={this.onFavClick}
					onTitleClick={this.onTitleClick}
				/>	
				{(this.state.mode != 'fav') ? (
					<Pagination
						totalPages={this.state.totalPages}
						page={this.state.page} 
						pageInputValue={this.state.pageInputValue}
						onChange={this.onPageInputChange} 
						onClick={this.goToHandler}
					/>) : (null)
				}
				{(this.state.underlay) && (
					<Underlay onClick={this.onUnderlayClick}>
						<SingleMovie 
							movie={this.state.singleMovie}
							onFavClick={this.onFavClick}
							recommendations={this.state.recommendations}
							onRecommendationClick={this.onRecommendationClick}
						/>
					</Underlay>
				)}
			</div>
		);
	}
}

export default MovieDBApp;