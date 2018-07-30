import React from 'react';
import ReactDOM from 'react-dom';

import MovieListItem from '../MovieListItem';

import API from '../../helpers/API';

import Pagination from '../Pagination';

const MovieList = (props) => {

	function onClick(id) {
		console.log(id);
	}

	return (
		<div>
			{props.movies.map((item, index) =>
				<MovieListItem
                    key={index}
                    movie={item}
                    allGenres={props.allGenres}
                    onClick={()=>{onClick(item.id)}}
                />)}
		</div>
	);
}

export default MovieList;
