import React from 'react';
import './style.less';
import API from '../../helpers/API';
import noPoster from '../../img/no_poster.jpg';

const Poster = (props) => {
	const {
		src,
		alt,
		onClick,
		width,
		height
	} = props;
	return (
		<img
			className="poster"
			src={API.movies.getPosterPath(src) || noPoster}
			alt={alt}
			onClick={onClick}
			width={width || '200px'}
			height={height || '300px'}
		/>
	)
}

export default Poster;
