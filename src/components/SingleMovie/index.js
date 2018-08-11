import React from 'react';
import './style.less';
import Button from '../Button';
import API from '../../helpers/API';
import MyLocalStorage from '../../helpers/localStorage';

const SingleMovie = (props) => {
	const { movie, onFavClick } = props;

	const clickHandler = (e) => {
		e.stopPropagation();
	};

	let convertedGenres = '';
	movie.genres.forEach((genre) => {
			convertedGenres += genre.name + ', ';
		});
	convertedGenres = convertedGenres.slice(0, -2);

	let convertedCountries = '';
	movie.production_countries.forEach((country) => {
			convertedCountries += country.name + ', ';
		});
	convertedCountries = convertedCountries.slice(0, -2);

	console.log(movie.genres);
	console.log(movie.production_countries);
	console.log(convertedGenres);
	console.log(convertedCountries);

	return(
		<article className='single-movie' onClick={clickHandler}>
			<section className='general-info'>
				<img
					className="img"
					src={API.movies.getPosterPath(movie.poster_path)}
					alt={movie.title}
				/>
				<div className='info'>
					<p className='title'>{movie.title}</p>
					<div className='info-item'>
						<span className='info-type'>Оригинальное название:</span>
						<span className='info-value'>{movie.original_title}</span>
					</div>
					<div className='info-item'>
						<span className='info-type'>Дата выхода:</span>
						<span className='info-value'>{movie.release_date}</span>
					</div>
					<div className='info-item'>
						<span className='info-type'>Страны:</span>
						<span className='info-value'>{convertedCountries}</span>
					</div>
					<div className='info-item'>
						<span className='info-type'>Жанры:</span>
						<span className='info-value'>{convertedGenres}</span>
					</div>
					<div className='info-item'>
						<span className='info-type'>Продолжительность:</span>
						<span className='info-value'>{movie.runtime}</span>
					</div>
					<div className='info-item'>
						<span className='info-type'>Бюджет:</span>
						<span className='info-value'>${movie.budget}</span>
					</div>
					<div className='info-item'>
						<span className='info-type'>Сборы в мире:</span>
						<span className='info-value'>${movie.revenue}</span>
					</div>
				</div>
				<Button
					bigFont={true}
					text={"\u2b50"}
					onClick={()=>{onFavClick(movie.id)}}
					inFav={MyLocalStorage.isInArray('fav', movie.id)}
				/>
			</section>
			<section className='details'>
			</section>
			<section className='similar-movies'>
			</section>
			
		</article>
	)
}

export default SingleMovie;