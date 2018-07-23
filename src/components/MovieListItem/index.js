import React from 'react';
import './style.less';

import Button from '../Button';

import API from '../../helpers/API';

const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const MovieListItem = (props) => {
	const { movie, allGenres } = props;
	console.log('MovieListItem allGenres', allGenres);
	console.log('MovieListItem movie', movie);

	let convertedGenres = '';
	allGenres.forEach((item) => {
		if (movie.genre_ids.indexOf(item.id) != -1) convertedGenres += item.name + ', ';
	});
	convertedGenres = convertedGenres.slice(0, -2);

	console.log('Current movie', movie);

	//const convertGenresIdsToNames = (genres) => {
	//	let names = [];
	//	allGenres.forEach((item, i, allGenres) => {
	//		if (genres.indexOf(item.id) != -1) names.push(item.name);
	//	});
	//	return names.join(', ');
	//};

	return (
		<article className="movie-list-item">
			<img className="img" src={IMG_URL + movie.poster_path} alt={movie.title} />
			<div className="info">
				<h3 className="title">{movie.title}</h3>
				<p className="genres">{convertedGenres}</p>
			</div>
			<Button text="fav" />
		</article>
	);
};

export default MovieListItem;
