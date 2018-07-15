import React from 'react';
import './style.less';

import Button from '../Button';

import API from '../../helpers/API';

const MovieListItem = props => {

	const { movie, allGenres } = props;

	convertGenresIdsToNames = (genres) => {
		let names = [];
		allGenres.forEach((item, i, allGenres) => {
			if (genres.indexOf(item.id) != -1) names.push(item.name);
		});
		return names.join(', ');
	}

	return (
		<article className="movie-list-item">
			<img className="img" src={movie.poster_path} alt={movie.title} />
			<div className="info">
				<h3 className="title">{movie.title}</h3>
				<p className="genres">{convertGenresIdsToNames(movie.genre_ids)}</p>
			</div>
			<Button text="fav" />
		</article>
	)
}

export default MovieListItem;