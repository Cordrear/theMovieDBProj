import React from 'react';
import API from '../../helpers/API';
import Pagination from '../Pagination';
import MovieList from '../MovieList';

class MovieDBApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: [],
			allGenres: [],
			page: 1,
			total_pages: 1,
			pageInputValue: 1
		};
	}

	async getPopularMovies(pageNumber = 1) {
		const dataMovies = await API.movies.getPopular(pageNumber);
		const movies = dataMovies.results;

		const dataAllGenres = await API.getGenres();
		const allGenres = dataAllGenres.genres;

		const page = dataMovies.page;
		const total_pages = dataMovies.total_pages;

		this.setState({
			movies,
			allGenres,
			page,
			total_pages,
		});
	}

	async componentDidMount() {
		this.getPopularMovies();
	}

	goToHandler = (e) => {
		let goTo = this.state.pageInputValue;
		if (goTo > this.state.total_pages) {
			goTo = this.state.total_pages;
		};
		if (goTo < 1) {
			goTo = 1;
		};
		this.getPopularMovies(goTo);
	};

	onPageInputChange = (e) => {
		this.setState({
			pageInputValue: e.target.value
		})
	};

	render() {
		return (
			<div>
				<MovieList movies={this.state.movies} allGenres={this.state.allGenres} />	
				<Pagination total_pages={this.state.total_pages} page={this.state.page} 
					pageInputValue={this.state.pageInputValue} onChange={this.onPageInputChange} 
					onClick={this.goToHandler} />
			</div>
		);
	}
}

export default MovieDBApp;