import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <nav>
                <NavLink className={({isActive}) => isActive ? 'active' : undefined} to='/home'>HOME</NavLink>
                <NavLink className={({isActive}) => isActive ? 'active' : undefined} to='/about'>ABOUT</NavLink>
                <NavLink className={({isActive}) => isActive ? 'active' : undefined} to='/products'>Products</NavLink>
                <NavLink className={({isActive}) => isActive ? 'active' : undefined} to='/posts'>Posts</NavLink>
                <NavLink className={({isActive}) => isActive ? 'active' : undefined} to='/friends'>Friends</NavLink>
                {/* Don't use anchor */}
                {/* <a href="/home">Home</a>
            <a href="/about">About</a> */}
            </nav>
            <p>common header</p>
        </div>
    );
};

export default Header;