import React from 'react';
import ReactDOM from 'react-dom';


import MovieList from './components/MovieList';

import './style.less';

const App = () => {
  return (
    <div>
    	
    	<MovieList />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
