import React from 'react';
import ReactDOM from 'react-dom';
import './style.less';

import MovieListItem from '../MovieListItem';

import API from '../../helpers/API';
import MyLocalStorage from '../../helpers/localStorage';

import Pagination from '../Pagination';

const MovieList = (props) => {
	return (
		<div className='movie-list'>
			{!props.isLoading ? (
			props.movies.map((item, index) =>
				<MovieListItem
                    key={index}
                    movie={item}
                    allGenres={props.allGenres}
                    onFavClick={()=>{props.onFavClick(item.id)}}
                    inFav={MyLocalStorage.isInArray('fav', item.id)}
                    onTitleClick={()=>{props.onTitleClick(item.id)}}
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
