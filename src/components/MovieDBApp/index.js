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

	async componentDidMount() {
		const dataMovies = await API.movies.getPopular();
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

	goToHandler = (e) => {
		let goTo = e.target.value;
		if (goTo > this.state.total_pages) {
			goTo = this.state.total_pages;
		};
		//API request
	};

	onPageInputChange = (e) => {
		console.log(e.target.value);
		this.setState({
			pageInputValue: e.target.value
		})
	};

	render() {
		return (
			<div>
				<MovieList movies={this.state.movies} allGenres={this.state.allGenres}/>	
				<Pagination total_pages={this.state.total_pages} page={this.state.page} pageInputValue={this.state.pageInputValue} onChange={this.onPageInputChange} onClick={this.goToHandler}/>
			</div>
		);
	}
}

export default MovieDBApp;