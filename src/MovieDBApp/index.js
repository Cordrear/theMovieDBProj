import React from 'react';
import API from '../helpers/API';
import MyLocalStorage from '../helpers/localStorage';
import Pagination from '../components/Pagination';
import MovieList from '../components/MovieList';
import Header from '../components/Header';

class MovieDBApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: [],
			allGenres: [],
			page: 1,
			total_pages: 1,
			pageInputValue: 1,
			searchInputValue: '',
			mode: 'popular',
			lastSearch: '',
			isLoading: true,
			updateByFav: true
		};
	}

	async componentDidMount() {
		this.getPopularMovies();
	}

	async getPopularMovies(pageNumber = 1) {
		this.setState({isLoading: true});

		const dataMovies = await API.movies.getPopular(pageNumber);
		const movies = dataMovies.results;

		const dataAllGenres = await API.getGenres();
		const allGenres = dataAllGenres.genres;

		this.setState({isLoading: false});
		const page = dataMovies.page;
		const total_pages = dataMovies.total_pages;
		this.setState({
			movies,
			allGenres,
			page,
			total_pages,
		});
	}

	async doMoviesSearch(query, pageNumber = 1) {
		this.setState({isLoading: true});

		const dataMovies = await API.search(query, pageNumber);
		const movies = dataMovies.results;

		const dataAllGenres = await API.getGenres();
		const allGenres = dataAllGenres.genres;

		this.setState({isLoading: false});
		const page = dataMovies.page;
		const total_pages = dataMovies.total_pages;
		this.setState({
			movies,
			allGenres,
			page,
			total_pages
		});
	}

	goToHandler = (e) => {
		let goTo = this.state.pageInputValue;
		if (goTo > this.state.total_pages) {
			goTo = this.state.total_pages;
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
			case 'fav':
				//
				break;
			default: 
				console.error('nonexistent mode');
		}
		window.scrollTo(0, 0);
	};

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

	onPageInputChange = (e) => {
		this.setState({
			pageInputValue: e.target.value
		});
	};

	onSearchInputChange = (e) => {
		this.setState({
			searchInputValue: e.target.value
		});
	};

	onLogoClick = () => {
		this.getPopularMovies();
		this.setState({
				mode: 'popular',
				pageInputValue: 1,
				lastSearch: ''
			});
	};

	onFavClick = (id) => {
		MyLocalStorage.toggleInArray('fav', id);
		this.setState(this.state);
	}

	render() {
		return (
			<div>
				<Header
					onClick={this.searchHandler}
					onChange={this.onSearchInputChange}
					searchInputValue={this.state.searchInputValue}
					onLogoClick={this.onLogoClick}
				/>
				<MovieList
					movies={this.state.movies}
					allGenres={this.state.allGenres}
					isLoading={this.state.isLoading}
					onFavClick={this.onFavClick}
				/>	
				<Pagination
					total_pages={this.state.total_pages}
					page={this.state.page} 
					pageInputValue={this.state.pageInputValue}
					onChange={this.onPageInputChange} 
					onClick={this.goToHandler}
				/>
			</div>
		);
	}
}

export default MovieDBApp;