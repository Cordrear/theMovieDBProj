import React from 'react';
import ReactDOM from 'react-dom';

import MovieListItem from '../MovieListItem';

import API from '../../helpers/API';

import Pagination from '../Pagination';

class MovieList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: [],
			allGenres: [],
			page: 1,
			total_pages: 1,
		};
	}

	async componentDidMount() {
		const dataMovies = await API.movies.getPopular();
		const movies = dataMovies.results;

		const dataAllGenres = await API.getGenres();
		const allGenres = dataAllGenres.genres;

		const page = dataMovies.page;
		const total_pages = dataMovies.total_pages;

		this.setState({
			movies,
			allGenres,
			page,
			total_pages,
		});
	}

	render() {
		return (
			<div>
				{this.state.movies.map((item, index) => 
					<MovieListItem movie={item} allGenres={this.state.allGenres} key={index} />)}	
				<Pagination total_pages={this.state.total_pages} page={this.state.page}/>
			</div>
		);
	}
}

export default MovieList;

/*
const List = props => (
  <ul>
    {props.items.map((item, index) => <li key={item + index}>{item}</li>)}
  </ul>
);
*/