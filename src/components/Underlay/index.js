import React from 'react';
import './style.less';

const Underlay = (props) => {
	const { id, onClick } = props;
	return(
		<section className='underlay' onClick={onClick}>
			<p>{id}</p>
		</section>
	);
}

export default Underlay;