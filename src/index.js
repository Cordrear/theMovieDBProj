import React from 'react';
import ReactDOM from 'react-dom';


import MovieList from './components/MovieList';

import './style.less';

const App = () => {
  return (
    //
    <MovieList />
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
