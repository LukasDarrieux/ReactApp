/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

function Menu() {
    return (
        <nav className="navbar navbar-dark bg-dark">

            <div className="nav text-white justify-content-start">
                <h1>React App</h1>
            </div>

            <ul className="nav justify-content-end">

                <li className="nav-item">
                    <a className="nav-link text-white" href="/">Home</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link text-white" href="/Produto">Produtos</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link text-white" href="/WeatherForecast">Weather Forecast</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link text-white" href="https://localhost:7099/swagger" target="_blank">Api</a>
                </li>

            </ul>
            
            
            
        </nav>
    );
}

export default Menu;