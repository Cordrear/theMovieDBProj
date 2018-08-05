import React from 'react';
import './style.less';
import Button from '../Button';

const Search = (props) => {
	const {onSearchClick, onChange, searchInputValue} = props;
	return(
		<div className="search">
			<input
				onChange={onChange}
				value={searchInputValue}
				onKeyUp={
					(e) => {
						if (e.keyCode === 13) {
							onSearchClick();
						}
					}
				} />
			<Button text="Поиск" onClick={onSearchClick} />
		</div>
	);
}

export default Search;