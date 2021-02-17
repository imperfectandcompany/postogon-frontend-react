import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
    <nav class={"bg-red-500 top-0 sticky z-10"}>
        <Link to='/' className='pl-8'>Postogon</Link>
    </nav>
    );
};

export default NavBar;
