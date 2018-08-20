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

	const toFirstPage = () => {};
	const toPrevPage = () => {};
	const toNextPage = () => {};
	const toLastPage = () => {};


	return (
		<section className="pagination">
			<div className='nav'>
				<Button text='<<' onClick={()=>{onClick('first')}} />
				<Button text='<' onClick={()=>{onClick('prev')}} />
				<input
					id="pageInput"
					
					min="1"
					max={total_pages}
					value={pageInputValue}
					onChange={onChange}
					onKeyUp={
						(e) => {
							if (e.keyCode === 13) {
								onClick();
							}
						}
					} />
				<Button text='>' onClick={()=>{onClick('next')}} />
				<Button text='>>' onClick={()=>{onClick('last')}} />
			</div>
			<Button text="Перейти" onClick={onClick} />
			<div>
				<p>Страница: {page} из {total_pages}</p>
			</div>
		</section>
	);
};

export default Pagination;