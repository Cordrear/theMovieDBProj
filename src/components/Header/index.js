import React from 'react';
import './style.less';
import Button from '../Button';
import Search from '../Search';

const Header = (props) => {
	const {onClick, onChange, searchInputValue} = props;
	return(
		<header>
			<Search onClick={onClick} onChange={onChange} searchInputValue={searchInputValue} />
			<Button text="Избранное" />
		</header>
	);
};

export default Header;