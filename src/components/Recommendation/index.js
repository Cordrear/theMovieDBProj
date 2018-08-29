import React from 'react';
import './style.less';
import Poster from '../Poster';

const Recommendation = (props) => {
	return(
		<article className='recommended-movie'>
			<p className='loading'>Загрузка...</p>
			<Poster
				src={props.movie.poster_path}
				title={props.movie.title}
				onClick={props.onClick}
				height='225px'
			/>
		</article>
	)
}

export default Recommendation;