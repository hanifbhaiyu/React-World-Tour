import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
    const [countries, setcountries] = useState([]);
    const [visitedCountries, setvisitedCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setcountries(data));

    }, [])
    // console.log(countries)
    const handleVisitedCountry = country => {
        setvisitedCountries(country)
        const newVisitedCountries = [...visitedCountries, country]
        setvisitedCountries(newVisitedCountries)
    }

    return (
        <div>
            <h4>Countries Length:{countries.length}</h4>
            <div>
                <h5>Visited Countries:{visitedCountries.length}</h5>
                <ul className="ul">
                    {
                        // eslint-disable-next-line react/jsx-key
                        visitedCountries.map(country => <li>{country.name.common} <br />
                            <img className="image-size-two" src={country.flags.png} alt="" />
                        </li>)
                    }

                </ul>
            </div>

            <div className="individual-country">
                {
                    countries.map((country, index) => (
                        <Country key={index} handleVisitedCountry={handleVisitedCountry}
                            country={country}></Country>
                    ))
                }
            </div>
        </div>
    );
};

export default Countries;