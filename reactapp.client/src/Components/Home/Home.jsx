import React from 'react'
import Menu from '../Menu/Menu';

function App() {
    return (
        <div>
            <Menu />
            <div className="container mt-4">
                <h1>Aplicativo React com ASP.NET Core</h1>

                <p>Aplicacao desenvolvida com as tecnologias React JS, ASP.NET Core, Entity Framework e banco de dados MySQL </p>

                <p>
                    Desenvolvedor: Lucas Darrieux &nbsp;
                    <a className="Link" href="https://br.linkedin.com/in/lucas-darrieux-5683a9167">LinkedIn</a> &nbsp;
                    <a className="Link" href="https://github.com/LukasDarrieux">GitHub</a>
                </p>


            </div>
        </div>
    );
}

export default App;