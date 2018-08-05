import React from 'react';
import ReactDOM from 'react-dom';
import './style.less';

import MovieListItem from '../MovieListItem';

import API from '../../helpers/API';
import MyLocalStorage from '../../helpers/localStorage';

import Pagination from '../Pagination';

const MovieList = (props) => {

	function onFavClick(id) {
		MyLocalStorage.toggleInArray('fav', id);
	}

	return (
		<div className='movie-list'>
			{!props.isLoading ? (
			props.movies.map((item, index) =>
				<MovieListItem
                    key={index}
                    movie={item}
                    allGenres={props.allGenres}
                    onFavClick={()=>{onFavClick(item.id)}}
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
