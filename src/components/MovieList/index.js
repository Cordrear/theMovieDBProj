import React from 'react';
import ReactDOM from 'react-dom';
import './style.less';

import MovieListItem from '../MovieListItem';

import API from '../../helpers/API';

import Pagination from '../Pagination';

const MovieList = (props) => {

	function onClick(id) {
		console.log(id);
	}

	return (
		<div className='movie-list'>
			{!props.isLoading ? (
			props.movies.map((item, index) =>
				<MovieListItem
                    key={index}
                    movie={item}
                    allGenres={props.allGenres}
                    onClick={()=>{onClick(item.id)}}
                />)
			) : (
			<div className='is-loading'>
				<p>Loading...</p>
			</div>
			)}
		</div>
	);
}

export default MovieList;
