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


var data = "{}";

var xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    //console.log(this.responseText);
  }
});

xhr.open("GET", "https://api.themoviedb.org/3/movie/top_rated?page=1&language=en-US&api_key=d376b1449bc67048fe304e600c11fb06");

xhr.send(data);



ReactDOM.render(<App />, document.getElementById('root'));
