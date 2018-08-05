import React from 'react';
import './style.less';

import Button from '../Button';

import API from '../../helpers/API';

const MovieListItem = (props) => {
	const { movie, allGenres, onClick, onFavClick } = props;

	let convertedGenres = '';
	allGenres.forEach((item) => {
		if (movie.genre_ids.indexOf(item.id) != -1) convertedGenres += item.name + ', ';
	});
	convertedGenres = convertedGenres.slice(0, -2);

	return (
		<article className="movie-list-item">
			<img className="img" src={API.movies.getPosterPath(movie.poster_path)} alt={movie.title} />
			<div className="info">
				<a className="title" onClick={onClick}>{movie.title}</a>
				<p className="genres">{convertedGenres}</p>
			</div>
			<Button bigFont={true} text={"\u2b50"} onClick={onFavClick}/>
		</article>
	);
};

export default MovieListItem;
