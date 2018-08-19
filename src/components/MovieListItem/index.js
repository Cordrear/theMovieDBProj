import React from 'react';
import './style.less';
import Button from '../Button';
import API from '../../helpers/API';

const MovieListItem = (props) => {
	const { movie, allGenres, onFavClick, inFav, onTitleClick } = props;

	let convertedGenres = '';
	//так приходит через getPopular
	if(movie.genre_ids) {
		allGenres.forEach((item) => {
			if (movie.genre_ids.indexOf(item.id) != -1) convertedGenres += item.name + ', ';
		});
	}
	//так приходит через getById
	if(movie.genres) {
		movie.genres.forEach((genre) => {
			convertedGenres += genre.name + ', ';
		});
	}
	convertedGenres = convertedGenres.slice(0, -2);

	return (
		<article className="movie-list-item">
			<img
				className="img"
				src={API.movies.getPosterPath(movie.poster_path)}
				alt={movie.title}
				onClick={onTitleClick}
			/>
			<div className="info">
				<a 
					className="title"
					onClick={onTitleClick}
				>
					{movie.title}
				</a>
				<p className="genres">{convertedGenres}</p>
			</div>
			<Button
				bigFont={true}
				text={"\u2b50"}
				onClick={onFavClick}
				inFav={inFav}
			/>
		</article>
	);
};

export default MovieListItem;
