import React from 'react';
import './style.less';
import SingleMovie from '../SingleMovie';

const Underlay = (props) => {
	const { movie, onClick } = props;
	return(
		<section className='underlay' onClick={onClick}>
			<SingleMovie movie={movie} />
		</section>
	);
}

export default Underlay;