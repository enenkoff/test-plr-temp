import React from 'react';
import ReactDOM from 'react-dom';
import News from './components/News/News.js';
import Gallery from './components/Gallery/Gallery.js';
import Subscribe from './components/Subscribe/Subscribe.js';

ReactDOM.render(<News />, document.getElementById('news'));

ReactDOM.render(<Gallery />, document.getElementById('gallery'));

ReactDOM.render(<Subscribe />, document.getElementById('subscribe'));
