import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Country.css'
const Country = ({ country }) => {
    const navigate = useNavigate();
    const handleNavigate = () =>{
        navigate((`/country/${country.name}`))
    };
    return (
        <div className='country'>
            <h2>{country.name}</h2>
            <button onClick={handleNavigate}>Details</button>
        </div>
    );
};

export default Country;