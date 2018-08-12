import React from 'react';
import './style.less';
import Button from '../Button';
import Search from '../Search';
import logo from '../../img/logo.svg';

const Header = (props) => {
	const {onSearchClick, onChange, searchInputValue, onLogoClick, showFavMovies} = props;
	return(
		<header>
			<img
				src={logo}
				alt='Logo'
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