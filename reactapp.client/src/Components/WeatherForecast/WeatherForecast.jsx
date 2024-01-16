import { useEffect, useState } from 'react';
import Menu from '../Menu/Menu';

function WeatherForecast() {
    const [forecasts, setForecasts] = useState();

    useEffect(() => {
        populateWeatherData();
    }, []);

    const contents = forecasts === undefined
        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
        :<div>

            <table className="table table-hover">
                <thead>
                    <th scope="col">Date</th>
                    <th scope="col">Temp. (C)</th>
                    <th scope="col">Temp. (F)</th>
                    <th scope="col">Summary</th>
                </thead>
                <tbody>
                    {forecasts.map(forecast =>
                        <tr scope="row" key={forecast.date}>
                            <td>{forecast.date}</td>
                            <td>{forecast.temperatureC}</td>
                            <td>{forecast.temperatureF}</td>
                            <td>{forecast.summary}</td>
                        </tr>
                    )}
                </tbody>


            </table>
        </div>;

    return (
        
        <div className="WeatherForecast">
            <Menu />
            <div className="container">

                <h2 className="mt-4">Weather forecast</h2>

                <p className="mt-2">This component demonstrates fetching data from the server.</p>

                {contents}

            </div>

        </div>
    );
    
    async function populateWeatherData() {
        const response = await fetch('/api/weatherforecast');
        const data = await response.json();
        setForecasts(data);
    }
}

export default WeatherForecast;