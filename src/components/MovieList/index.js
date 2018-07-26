import React from 'react';
import ReactDOM from 'react-dom';

import MovieListItem from '../MovieListItem';

import API from '../../helpers/API';

import Pagination from '../Pagination';

const MovieList = (props) => {
	return (
		<div>
			{props.movies.map((item, index) => 
				<MovieListItem movie={item} allGenres={props.allGenres} key={index} />)}
		</div>
	);
}

export default MovieList;