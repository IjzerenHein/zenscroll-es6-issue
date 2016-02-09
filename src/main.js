import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'file?name=index.html!./index.html';
import 'style!css!less!./styles.less';

ReactDOM.render(<App itemsPerPage={16}/>, document.getElementById('app'));
