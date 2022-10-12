import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './SingleCountry.css'
const SingleCountry = () => {
    const country = useLoaderData()[0];
    return (
        <div className='countryStyle'>
            <img src={country ? country.flags?.png : 'Not Available'} alt="" />
            <h1>{country?.name.common}</h1>
        </div>
    );
};

export default SingleCountry;