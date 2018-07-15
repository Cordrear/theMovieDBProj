import React from 'react';
import ReactDOM from 'react-dom';

import MovieListItem from '../MovieListItem';

import API from '../../helpers/API';

class MovieList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			//movies: []
		}
	};

	componentDidMount() {
		const movies = API.movies.getPopular();
		const allGenres = API.getGenres();
	}

	render() {
		return(
			<div>
		      <MovieListItem movie=movies.results[0] allGenres=allGenres/>
		      /*<MovieListItem alt="poster" title="very very very very very very 
		        very very very very very very very very very very very very 
		        very very very very long title" genres="genre1 genre2" />*/
		    </div>
		);
	}
}

export default MovieList;