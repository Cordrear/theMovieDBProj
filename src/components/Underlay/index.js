import React from 'react';
import './style.less';
import SingleMovie from '../SingleMovie';

const Underlay = (props) => {
	const { onClick, children } = props;
	return(
		<article className='underlay' onClick={onClick}>
			{children}
		</article>
	);
}

export default Underlay;