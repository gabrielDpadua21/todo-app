import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Todo from './components/Todo';
import About from './components/About';

const PageRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Todo />} />
            <Route path='/todo' element={<Todo />} />
            <Route path='/about' element={<About />} />
        </Routes>
    );
}

export default PageRouter;