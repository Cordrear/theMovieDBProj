import React from 'react';
import ReactDOM from 'react-dom';


import MovieDBApp from './components/MovieDBApp';

import './style.less';

const App = () => (
    <div>	
    	<MovieDBApp />
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
