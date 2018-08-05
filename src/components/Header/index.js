import React from 'react';
import './style.less';
import Button from '../Button';
import Search from '../Search';

const Header = (props) => {
	const {onSearchClick, onChange, searchInputValue, onLogoClick, showFavMovies} = props;
	return(
		<header>
			<img
				src='https://www.themoviedb.org/static_cache/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg'
				onClick={onLogoClick}
			/>
			<Search
				onSearchClick={onSearchClick}
				onChange={onChange}
				searchInputValue={searchInputValue}
			/>
			<Button text="Избранное" onClick={showFavMovies}/>
		</header>
	);
};

export default Header;