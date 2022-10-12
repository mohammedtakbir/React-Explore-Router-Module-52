import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <>
            <nav className='header'>
                <NavLink style={({ isActive }) => {
                    return isActive ? { color: 'lightseagreen' } : undefined
                }} to='/home'>Home</NavLink>
                <NavLink style={({ isActive }) => {
                    return isActive ? { color: 'lightseagreen' } : undefined
                }} to='/about'>About</NavLink>
                <NavLink style={({ isActive }) => {
                    return isActive ? { color: 'lightseagreen' } : undefined
                }} to='/products'>Products</NavLink>
                <NavLink style={({ isActive }) => {
                    return isActive ? { color: 'lightseagreen' } : undefined
                }} to='/countries'>Countries</NavLink>
            </nav>
            <Outlet></Outlet>
        </>
    );
};

export default Header;