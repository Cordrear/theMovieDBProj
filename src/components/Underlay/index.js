import React from 'react';
import './style.less';
import SingleMovie from '../SingleMovie';

const Underlay = (props) => {
	const { movie, onClick, onFavClick, recommendations, onRecommendationClick } = props;
	return(
		<article className='underlay' onClick={onClick}>
			<SingleMovie
				movie={movie}
				onFavClick={onFavClick}
				recommendations={recommendations}
				onRecommendationClick={onRecommendationClick}
			/>
		</article>
	);
}

export default Underlay;