import React from 'react';
import './style.less';
import Button from '../Button';
import API from '../../helpers/API';
import MyLocalStorage from '../../helpers/localStorage';
import Recommendation from '../Recommendation';

const SingleMovie = (props) => {
	const { movie, onFavClick, recommendations, onRecommendationClick } = props;

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
	
	return(
		<article className='single-movie' onClick={clickHandler}>
			<section className='general-info'>
				<img
					className="img"
					src={API.movies.getPosterPath(movie.poster_path)}
					alt={movie.title}
				/>
				<div className='info'>
					<p className='title'>{movie.title ||'Нет данных'}</p>
					<div className='info-wrapper'>
						<div className='info-item'>
							<span className='info-type'>Оригинальное название:</span>
							<span className='info-value'>{movie.original_title || 'Нет данных'}</span>
						</div>
						<div className='info-item'>
							<span className='info-type'>Дата выхода:</span>
							<span className='info-value'>{movie.release_date || 'Нет данных'}</span>
						</div>
						<div className='info-item'>
							<span className='info-type'>Страны:</span>
							<span className='info-value'>{convertedCountries || 'Нет данных'}</span>
						</div>
						<div className='info-item'>
							<span className='info-type'>Жанры:</span>
							<span className='info-value'>{convertedGenres || 'Нет данных'}</span>
						</div>
						<div className='info-item'>
							<span className='info-type'>Длительность (мин.):</span>
							<span className='info-value'>{movie.runtime || 'Нет данных'}</span>
						</div>
						<div className='info-item'>
							<span className='info-type'>Бюджет ($):</span>
							<span className='info-value'>{movie.budget || 'Нет данных'}</span>
						</div>
						<div className='info-item'>
							<span className='info-type'>Сборы в мире ($):</span>
							<span className='info-value'>{movie.revenue || 'Нет данных'}</span>
						</div>
						<div className='info-item'>
							<span className='info-type'>Оценка:</span>
							<span className='info-value'>{movie.vote_average} (всего голосов: {movie.vote_count})</span>
						</div>
					</div>
				</div>
				<Button
					bigFont={true}
					text={"\u2b50"}
					onClick={()=>{onFavClick(movie.id)}}
					inFav={MyLocalStorage.isInArray('fav', movie.id)}
				/>
			</section>
			{(movie.overview) && (<section className='overview'>
				<p>{movie.overview}</p>
			</section>)}
			{(!!recommendations.length) && (<section className='recommendations'>
				<p className='recommendations-header'>Рекоммендации:</p>
				<section className='recommended-movies'>
					{
						recommendations.map((item, index) =>
							<Recommendation
								className='recommended-movie'
								key={item.id}
								movie={item}
								onClick={()=>{onRecommendationClick(item.id)}}
							/>
						)
					}
				</section>
			</section>)}
		</article>
	)
}

export default SingleMovie;