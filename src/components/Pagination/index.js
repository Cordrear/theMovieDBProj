import React from 'react';
import './style.less';

import Button from '../Button';

const Pagination = (props) => {

	const clickHandler = () => {
		const goTo = document.getElementById("pageInput").value;
		console.log(goTo);
	};

	const {total_pages, page} = props;
	return (
		<section className="pagination">
			<div>
				<input id="pageInput" type="number" min="1" max={total_pages} defaultValue={page}/>
				<Button text="Перейти" onClick={clickHandler}/>
			</div>
			<div>
				<p>Страницы: 1 .. {total_pages}</p>
			</div>
		</section>
	);
};

export default Pagination;