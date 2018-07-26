import React from 'react';
import './style.less';
import Button from '../Button';

const Pagination = (props) => {

	const {total_pages, page} = props;

	const clickHandler = () => {
		let goTo = document.getElementById("pageInput").value;
		if (goTo > total_pages) {
			goTo = total_pages;
			document.getElementById("pageInput").value = goTo; //убрать?
		};
		console.log(goTo);

	};

	return (
		<section className="pagination">
			<div>
				<input id="pageInput" type="number" min="1" max={total_pages} defaultValue={page}/>
				<Button text="Перейти" onClick={clickHandler}/>
			</div>
			<div>
				<p>Страница: {page} из {total_pages}</p>
			</div>
		</section>
	);
};

export default Pagination;