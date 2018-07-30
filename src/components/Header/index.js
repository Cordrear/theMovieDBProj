import React from 'react';
import './style.less';
import Button from '../Button';
import Search from '../Search';

const Header = () => {
	//
	return(
		<header>
			<Search />
			<Button text="Избранное" />
		</header>
	);
};

export default Header;