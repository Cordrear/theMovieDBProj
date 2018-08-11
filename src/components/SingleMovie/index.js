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
	return(
		<article className='single-movie' onClick={clickHandler}>
			<section className='general-info'>
				<img
					className="img"
					src={API.movies.getPosterPath(movie.poster_path)}
					alt={movie.title}
				/>
				<div className='info'>
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