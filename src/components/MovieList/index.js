import React from 'react';
import ReactDOM from 'react-dom';

import MovieListItem from '../MovieListItem';

import API from '../../helpers/API';

class MovieList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: [],
			allGenres: [],
		};
	}

	async componentDidMount() {
		const dataMovies = await API.movies.getPopular();
		const movies = dataMovies.results;

		const dataAllGenres = await API.getGenres();
		const allGenres = dataAllGenres.genres;

		console.log('componentDidMount movies', movies);
		console.log('componentDidMount allGenres', allGenres);

		this.setState({
			movies,
			allGenres,
		});
	}

	render() {
		return (
			<div>
				{this.state.movies.length != 0 && (
					<MovieListItem movie={this.state.movies[0]} allGenres={this.state.allGenres} />
				)}
			</div>
		);
	}
}

export default MovieList;
