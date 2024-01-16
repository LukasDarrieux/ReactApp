import React from 'react';

import Home from './Components/Home/Home';
import Produtos from './Components/Produto/Produto';
import ProdutoForm from './Components/Produto/ProdutoForm';
import ProdutoEdit from './Components/Produto/ProdutoEdit';
import WeatherForecast from './Components/WeatherForecast/WeatherForecast';

import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home /> } />
                <Route path="/Produto" element={<Produtos />} />
                <Route path="/WeatherForecast" element={<WeatherForecast />} />
                <Route path="/Produto/New" element={<ProdutoForm />} />
                <Route path="/Produto/Edit/:id" element={<ProdutoEdit /> } />
            </Routes>
        </Router>
    )
}

export default AppRoutes;