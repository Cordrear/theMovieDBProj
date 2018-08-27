import React from 'react';
import './style.less';
import API from '../../helpers/API';

const Recommendation = (props) => {
	return(
		<article className='recommended-movie'>
			<p className='loading'>Загрузка...</p>
			<img 
				src={API.movies.getPosterPath(props.movie.poster_path)}
				alt={props.movie.title}
				title={props.movie.title}
				onClick={props.onClick}
			/>
		</article>
	)
}

export default Recommendation;