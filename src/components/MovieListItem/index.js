import React from 'react';
import './style.less';

import Button from '../Button';

const MovieListItem = props => {
	return (
		<article className="article">
			<img className="img" src={props.src} alt={props.title} />
			<div className="info">
				<h3 className="title">{props.title}</h3>
				<p className="genres">{props.genres}</p>
			</div>
			<Button text="fav" />
		</article>
	)
}

export default MovieListItem;