import React from 'react';
import './style.less';
import API from '../../helpers/API';

const Recommendation = (props) => {
	return(
		<article className='recommended-movie'>
			<img 
				src={API.movies.getPosterPath(props.movie.poster_path)}
				alt={props.movie.title}
				onClick={props.onClick}
			/>
		</article>
	)
}

export default Recommendation;