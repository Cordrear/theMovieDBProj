import React from 'react';
import './style.less';

const Button = props => {
	const {onClick, text, height, bigFont, inFav} = props;
	return (
    	<button 
    		className={'btn' + (bigFont ? ' fav' : '') + (inFav ? ' selected' : '')}
    		onClick={onClick}
    	>
      		{text}
    	</button>
 	);
};

export default Button;
