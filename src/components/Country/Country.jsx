/* eslint-disable react/prop-types */
import { useState } from 'react';
import './Country.css'
const Country = ({ country, handleVisitedCountry }) => {
    const { name, flags, capital, population, maps } = country;
    const [visited, setvisited] = useState(false);
    const handleVisited = () => {
        setvisited(!visited);
    }
    return (
        <div className={`country ${visited ? 'visited-country' : 'non-visited-country'}`}>
            <h3>Country name:{name.common}</h3>
            <img className='image-size' src={flags.png} alt="" />
            <h4>Capital name:{capital}</h4>
            <h4>Population:{population}</h4>
            <h4> Google Map: <a href={maps.googleMaps} target="_blank" rel="noopener noreferrer">View on Map</a></h4>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {
                (visited ? 'I visited this country' : 'I will visit')
            } <br />
            <button onClick={() => handleVisitedCountry(country)}>Mark visited</button> <br />
        </div>
    );
};

export default Country;