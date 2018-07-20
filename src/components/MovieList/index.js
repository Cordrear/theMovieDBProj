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
				{this.state.movies.map((item, index) => 
					<MovieListItem movie={item} allGenres={this.state.allGenres} key={index} />)}	
			</div>
		);
	}
}

export default MovieList;

/*
const List = props => (
  <ul>
    {props.items.map((item, index) => <li key={item + index}>{item}</li>)}
  </ul>
);
*/