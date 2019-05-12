import React from 'react';
import ReactDOM from 'react-dom';

import jQuery from 'jquery/dist/jquery.min.js';
import fancybox from '@fancyapps/fancybox/dist/jquery.fancybox.min.js';

import News from './components/News/News.js';
import Gallery from './components/Gallery/Gallery.js';
import Subscribe from './components/Subscribe/Subscribe.js';

// Fetch polyfill
require('es6-promise').polyfill();
require('isomorphic-fetch');

// ReactDOM renders
ReactDOM.render(<News />, document.getElementById('news'));
ReactDOM.render(<Gallery />, document.getElementById('gallery'));
ReactDOM.render(<Subscribe />, document.getElementById('subscribe'));
