import React from 'react';
import './style.less';
import Button from '../Button';

const Pagination = (props) => {

	const {
		total_pages,
		page,
		pageInputValue,
		onChange,
		onClick
	} = props;

	return (
		<section className="pagination">
			<div>
				<input id="pageInput" type="number" min="1" max={total_pages} value={pageInputValue} onChange={onChange} />
				<Button text="Перейти" onClick={onClick} />
			</div>
			<div>
				<p>Страница: {page} из {total_pages}</p>
			</div>
		</section>
	);
};

export default Pagination;