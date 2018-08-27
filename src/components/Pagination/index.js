import React from 'react';
import './style.less';
import Button from '../Button';

const Pagination = (props) => {

	const {
		totalPages,
		page,
		pageInputValue,
		onChange,
		onClick
	} = props;

	return (
		<section className="pagination">
			<div className='nav'>
				<Button text='<<' onClick={()=>{onClick('first')}} />
				<Button text='<' onClick={()=>{onClick('prev')}} />
				<input
					id="pageInput"
					min="1"
					max={totalPages}
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
				<p>Страница: {page} из {totalPages}</p>
			</div>
		</section>
	);
};

export default Pagination;