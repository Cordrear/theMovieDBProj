import React from 'react';
import './style.less';

const Button = props => {
	const {onClick, text, height, bigFont} = props;
	return (
    	<button 
    		className={'btn' + (bigFont ? ' fav' : '')}
    		onClick={onClick}
    	>
      		{text}
    	</button>
 	);
};

export default Button;
