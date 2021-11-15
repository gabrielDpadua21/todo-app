import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';

import Todo from './components/Todo';
import About from './components/About';

export default (props: any) => {
    return (
        <Routes>
            <Route path='/' element={<Todo />} />
            <Route path='/todo' element={<Todo />} />
            <Route path='/about' element={<About />} />
        </Routes>
    );
}