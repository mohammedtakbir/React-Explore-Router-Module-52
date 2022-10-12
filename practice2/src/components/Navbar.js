import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    return (
        <div className='nav'>
            <NavLink className={({isActive}) => isActive ? 'active' : undefined} to='/home'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/products'>Products</NavLink>
            <NavLink to='/countries'>Countries</NavLink>
        </div>
    );
};

export default Navbar;