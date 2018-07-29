import React from 'react';
import './style.less';

import Button from '../Button';

import API from '../../helpers/API';

const IMG_URL = 'https://image.tmdb.org/t/p/w500';

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

	const poster_path = (movie.poster_path) ? IMG_URL + movie.poster_path : 'https://store-images.s-microsoft.com/image/apps.10304.13510798886495884.b867e440-0644-43e9-8e4c-a70db68026b9.890841e5-da82-4036-a22b-faa80150d29e?mode=crop&q=90&h=300&w=200&format=jpg';

	return (
		<article className="movie-list-item">
			<img className="img" src={poster_path} alt={movie.title} />
			<div className="info">
				<a className="title">{movie.title}</a>
				<p className="genres">{convertedGenres}</p>
			</div>
			<Button text="fav" />
		</article>
	);
};

export default MovieListItem;
