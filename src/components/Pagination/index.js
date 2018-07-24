import React from 'react';
import './style.less';

import Button from '../Button';

const Pagination = (props) => {
	return (
		<section className="pagination">
			<div>
				<input type="number"/>
				<Button text="Перейти" />
			</div>
			<div>
				<p>1 .. total_pages</p>
			</div>
		</section>
	);
};

export default Pagination;