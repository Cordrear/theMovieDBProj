import React from 'react';
import './style.less';
import Button from '../Button';

const Search = (props) => {
	const {onClick, onChange, searchInputValue} = props;
	return(
		<div className="search">
			<input onChange={onChange} value={searchInputValue} />
			<Button text="Поиск" onClick={onClick} />
		</div>
	);
}

export default Search;