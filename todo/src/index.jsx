import React from 'react';
import ReactDOM from 'react-dom';

import { Container,Row } from 'reactstrap';

import 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import TodoList from './component/todoList';

const App = () => {
    return (
        <Container>
            <Row>
            <h1 className='my-3'>TODO</h1>
            </Row>
            <TodoList />
        </Container>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));