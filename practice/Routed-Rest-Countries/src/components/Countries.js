import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
const Countries = () => {
    const countries = useLoaderData();
    return (
        <div>
            <h1>total countries: {countries.length}</h1>
            {
                countries.map(country => <Link to={`/country/${country.name.common}`}>
                    <li>{country.name.common}</li>
                </Link>)
            }
        </div>
    );
};

export default Countries;