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
			pageInputValue: pageNumber
		});
	}

	async componentDidMount() {
		this.getPopularMovies();
	}

	goToHandler = (e) => {
		const { pageInputValue, total_pages} = this.state;
		const goTo = (pageInputValue > total_pages) ? total_pages : (pageInputValue < 1) ? 1 : pageInputValue;
		this.getPopularMovies(goTo);
	};

	onPageInputChange = (e) => {
		this.setState({
			pageInputValue: e.target.value
		})
	};

	render() {
		const { movies, allGenres, total_pages, page, pageInputValue } = this.state;
		return (
			<div>
				<MovieList
					movies={movies}
					allGenres={allGenres}
				 />
				<Pagination
					page={page}
					total_pages={total_pages}
					pageInputValue={pageInputValue}
					onChange={this.onPageInputChange}
					onClick={this.goToHandler}
				/>
			</div>
		);
	}
}

export default MovieDBApp;
