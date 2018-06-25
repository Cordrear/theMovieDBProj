import React from 'react';
import ReactDOM from 'react-dom';

import MovieListItem from '../MovieListItem';

class MovieList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div>
		      <MovieListItem alt="poster" title="title" genres="genre1 genre2" />
		      <MovieListItem alt="poster" title="very very very very very very 
		        very very very very very very very very very very very very 
		        very very very very long title" genres="genre1 genre2" />
		    </div>
		);
	}
}

export default MovieList;