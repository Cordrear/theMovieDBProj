import React from 'react';
import './style.less';

import Button from '../Button';

import API from '../../helpers/API';

const MovieListItem = (props) => {
	const { movie, allGenres } = props;

	let convertedGenres = '';
	allGenres.forEach((item) => {
		if (movie.genre_ids.indexOf(item.id) != -1) convertedGenres += item.name + ', ';
	});
	convertedGenres = convertedGenres.slice(0, -2);

	//const convertGenresIdsToNames = (genres) => {
	//	let names = [];
	//	allGenres.forEach((item, i, allGenres) => {
	//		if (genres.indexOf(item.id) != -1) names.push(item.name);
	//	});
	//	return names.join(', ');
	//};

	return (
		<article className="movie-list-item">
			<img className="img" src={API.movies.getPosterPath(movie.poster_path)} alt={movie.title} />
			<div className="info">
				<a className="title">{movie.title}</a>
				<p className="genres">{convertedGenres}</p>
			</div>
			<Button text="fav" />
		</article>
	);
};

export default MovieListItem;
