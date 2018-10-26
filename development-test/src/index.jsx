import React from 'react';
import ReactDOM from 'react-dom';

import 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import ClockList from './component/clockworks';



const Hello = () => {

  return (
    <ClockList />
  );
};

ReactDOM.render(<Hello />, document.getElementById('root'));