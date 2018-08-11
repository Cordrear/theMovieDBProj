import React from 'react';
import './style.less';
import SingleMovie from '../SingleMovie';

const Underlay = (props) => {
	const { movie, onClick, onFavClick } = props;
	return(
		<article className='underlay' onClick={onClick}>
			<SingleMovie movie={movie} onFavClick={onFavClick} />
		</article>
	);
}

export default Underlay;